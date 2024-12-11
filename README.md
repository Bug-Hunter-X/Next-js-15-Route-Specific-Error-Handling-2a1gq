# Next.js 15 Route-Specific Error Handling

This repository demonstrates a bug in Next.js 15 where an error thrown on a specific route isn't caught by a global error boundary, leading to a full-page crash.  The issue is isolated to the `/about` route while the `/` route functions correctly.

## Problem

A simple Next.js application is set up with two pages: `/` (Home) and `/about`.  The `/about` page intentionally throws an error.  A standard error boundary is expected to handle this, but instead, the application crashes.

## Solution

The solution shows using the `next/error` component to render a custom error page for the specific route. It ensures that the issue is handled elegantly without a full application crash.