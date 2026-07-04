---
title: "Turning my netbook into a powerful Linux machine"
slug: turning-my-netbook-into-a-powerful-linux-machine
author: Adhham
date: 2020-02-12
tags:
  - linux
  - arch
---


When I switched to a desktop as my main workstation, I bought a netbook-style laptop for casual computing and simple programming. However, I made a poor selection of the laptop as I bought the cheapest one I could find from the Chinese vendor AliExpress. Although it looked stylish (an exact clone of Macbook Air) it was performance wise no more than a toy. I regret overlooking the specificaiton and focusing my attention more on the appearance and weight.

When it came into my hands it had Windows 10 running. I anticipated that it could perhaps be used for casual computing like Internet browsing and word processing. But boy, I was wrong! It was way too slower to do even the simplest of the simplest tasks without losing my sanity.

The idea of installing Linux occurred to me even before. But, as it was the only Windows device I owned, I kept it as a software test machine to run Windows specific applications, if the need arise. Due to it's low specifications, it did very poor even as a test machine.

As the need for a laptop–which I can do simple programming and computing tasks–arose, I decided to give Linux a try instead of buying a new one.

## Installing Linux

It was a bit of a struggle to install Linux to this laptop as it only supports UEFI. I tried to give Puppy Linux a try first, but turns out that it only supports Legacy BIOS. I tried installing several other distros before I finally settled with Arch Linux and Xfce4\. I am pretty happy with everything around Arch and Xfce combo so far. It's fairly light and speedy as a result compared with Ubuntu/GNOME.

These are the distros I tried to install and the reason for ditching each one later on.

*   Puppy Linux – No UEFI suport
*   Trisquel Mini – I got some error right about when it was to finish the installation. Probably a bug in Kernel or something.
*   Bodhi Linux –  Didn't liked the Moksha Desktop environment.
*   ArchLabs – why not just install vanilla Arch? So I went and did that.

Arch is not the easiest distro to be installed, but it's very rewarding once you figure out everything.

## Performance

I have been using it for about a month now and it has worked great so far. I have used it for web-programming and some casual computing tasks like browsing the Internet. There is a significant performance boost compared to when it had Windows. I can have several tabs opened in the browser, write code from the terminal, and run some background processes all at the same time without dropping the performance. (Previously, this would be just a dream.) Considering its low-powered atom processor, I am more than happy with its current performance.

## Word About Arch

Also, installing Arch wasn't the easiest thing in the world. I had to spend several hours trying to figure things out. Its _build-your-own-OS_ approach, where you have to manually install the programs and glue everything together to create a functional OS, makes it really challenging to install and maintain for those that are not yet familiar. Though cumbersome and time-consuming, it had for me and hopefully will for you, paid off well at the end.