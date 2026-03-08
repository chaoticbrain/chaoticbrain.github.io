---
title: "Advanced Servo Tester"
description: "An RC servo tester with more features than the simple off-the-shelf variety — variable pulse width, speed control, and sweep modes."
heroImage: "./ServoTester.png"
badge: "WIP"
tags: ["hardware", "rc", "embedded"]
---

## Overview

Most off-the-shelf RC servo testers are single-knob affairs: turn it, the servo moves. That's fine for a quick sanity check, but not very useful when you're trying to dial in servo throws, test a specific center point, or check whether a servo operates smoothly across its full range of motion.

This project builds a more capable tester — one that gives you real control over what the servo is actually doing.

## Features

### Variable Pulse Width
Set the output pulse width directly in microseconds. Standard RC servos expect a pulse between 1000 µs (full deflection one way) and 2000 µs (full deflection the other), with 1500 µs as neutral. Being able to set this precisely is useful when:

- Verifying a servo reaches true mechanical center
- Testing extended range servos (some accept 800–2200 µs)
- Checking that your flight controller's output matches what the servo actually receives

### Speed Control
Sweep the servo from one endpoint to the other at a controllable rate. Useful for:

- Checking for mechanical binding through the range of motion
- Simulating slow vs. fast control inputs
- Identifying resonance or buzz at specific speeds

### Sweep Mode
Continuous back-and-forth sweep between configurable endpoints. Good for burn-in testing, linkage wear testing, or just confirming a servo runs smoothly under sustained use.

### Manual Step Mode
Increment or decrement pulse width in small steps using buttons. Useful for finding exact mechanical stops or trim points.

## Hardware

The tester is built around a small microcontroller that generates a standard 50 Hz PWM signal. A rotary encoder and a few buttons handle input. An OLED display shows the current mode, pulse width in microseconds, and any other relevant state.

Power is supplied via a standard servo connector (so it can be powered from the same BEC that would power the servo in the aircraft) or via USB for bench use.

## Status

Currently in active development. The core PWM output and variable pulse width control are working. Speed control and sweep modes are implemented but being refined. The enclosure design is still in progress.
