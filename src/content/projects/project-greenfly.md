---
title: "Project Greenfly"
description: "A website and app for logging flights on RC drones — track locations, battery cycles, flight time, and maintenance history."
pubDate: "2025-10-10"
badge: "WIP"
tags: ["web", "app", "rc", "drones"]
---

## Overview

If you fly RC drones seriously, you accumulate data: battery cycles, total flight time, locations you've flown, prop replacements, motor maintenance. Most pilots track this in a spreadsheet or not at all.

Project Greenfly is a web app for doing this properly — logging flights, tracking battery health over cycles, recording maintenance events, and building a history of where and how long you've flown.

## Features

### Flight Logging
After each flight, log:
- Location (map pin or named spot)
- Duration
- Which aircraft
- Which batteries
- Notes (wind conditions, what you were practicing, any incidents)

### Battery Tracking
LiPo batteries degrade over charge cycles. Greenfly tracks:
- Cycle count per pack
- Storage vs. full-charge cycles
- Internal resistance over time (if you have a charger that reports it)
- Retirement date and reason

This makes it easy to know which packs are aging out and which are still healthy.

### Aircraft Profiles
Each aircraft has its own profile:
- Total flight time
- Maintenance log (prop replacements, motor rebuilds, crash repairs)
- Associated batteries
- Configuration notes (tune settings, rates, etc.)

### Location History
A map view showing where you've flown, with flight counts and total time per location. Useful for remembering good spots and tracking where you've been.

### Statistics
- Total flight time across all aircraft
- Flights per week/month over time
- Battery health trends
- Most-flown locations

## Technical Approach

The app is a standard web application — a backend API serving a JavaScript frontend. The goal is something you can self-host easily (a single Docker container) or run on a small VPS. No cloud dependency, no subscription, your data stays yours.

The mobile experience is important since you'll be logging flights in the field — the UI is designed to work well on a phone.

## Status

Early development. The data model and API design are being worked out. No public release yet.
