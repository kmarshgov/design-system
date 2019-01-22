---
description: Primary buttons allow users to carry out an important action.
title: Primary Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Primary Button
Primary buttons allow users to carry out an important action on your service, such as Download or Submit.

## Required

## Last Updated:

## Visual
  Primary Button Visual:
![primary_button](https://github.com/bcgov/design-system/blob/master/components/primary_button/images/primary_button.png?raw=true)

## Live Preview Approach 1 - inline HTML

This approach involves pasting sample HTML code for the component directly into the Markdown page, along with required CSS in a `<style>` tag.

This approach work, at least for simple components, with no Javascript, and where the CSS is compatible with that of the Design System.  However, there is potential for these to conflict and/or for additional effort to be required to ensure proper rendering, by scoping CSS, etc. 

<style>
    .preview .primarybutton {
        background-color: #003366; /* Green */
        border: none;
        border-radius: 5px;
        color: white;
        padding: 10px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
        cursor: pointer;
    }

    .preview .primarybutton:hover {
        text-decoration: underline;
        opacity: 0.9;
    }
</style>

<div class="preview">
    <button class="primarybutton" type="button" name="button">Submit</button>
</div>

## Live Preview Approach 2 - iframe with content as base64 data URI

This approach involves creating an example usage of the current component as a standalone resource, and presenting it in an iframe. This approach works, and is similar to what is used by the UK.GOV Design System.  It has the advantage that components cannot conflict with the rendered Markdown file's CSS or markup.  

There are a couple variants of this:

1. converting the sample to base64, then referencing it as a data-uri, as is done in the example below; *this could be automated/streamlined by implementing a custom remark plugin*
1. copying the sample html file to the gatsby `public` directory at build-time and referencing the sample html file as src attribute; * this requires some more research and possible a gatsby plugin*

<iframe title="Primary Button Preview" width="200" height="200" frameBorder="0" src="data:text/html;base64,PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiIgZGlyPSJsdHIiPg0KPGhlYWQ+DQogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPg0KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iLi9zdHlsZS5jc3MiPg0KICAgIDxsaW5rIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMiIHJlbD0ic3R5bGVzaGVldCI+DQogICAgPHRpdGxlPlNhbXBsZSBQcmltYXJ5IEJ1dHRvbjwvdGl0bGU+DQogICAgPHN0eWxlPg0KICAgICAgICAucHJldmlldyAucHJpbWFyeWJ1dHRvbiB7DQogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzY2OyAvKiBHcmVlbiAqLw0KICAgICAgICAgICAgYm9yZGVyOiBub25lOw0KICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4Ow0KICAgICAgICAgICAgY29sb3I6IHdoaXRlOw0KICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMnB4Ow0KICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOw0KICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOw0KICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4Ow0KICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCAnQ2FsaWJyaScsICdBcmlhbCcsICdTYW5zIFNlcmlmJzsNCiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsNCiAgICAgICAgfQ0KDQogICAgICAgIC5wcmV2aWV3IC5wcmltYXJ5YnV0dG9uOmhvdmVyIHsNCiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOw0KICAgICAgICAgICAgb3BhY2l0eTogMC45Ow0KICAgICAgICB9DQogICAgPC9zdHlsZT4NCg0KPC9oZWFkPg0KPGJvZHk+DQo8ZGl2IGNsYXNzPSJwcmV2aWV3Ij4NCiAgICA8YnV0dG9uIGNsYXNzPSJwcmltYXJ5YnV0dG9uIiB0eXBlPSJidXR0b24iIG5hbWU9ImJ1dHRvbiI+U3VibWl0PC9idXR0b24+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg=="></iframe>

## Live Preview Approach 3 - Embed React version of Component in markdown

Rather than inline html, or an iframe, this approach would have Design System creators embed a React component into the Mardown source, which would display the sample code and component usage.  This would require developing a  React component - or at least configuring one, but a hypotehical exmaple is provided below:


 <interactive-counter></interactive-counter> 


## Requirements
* This component must be used according the the standard outined in this document. Any feedback should be directed to the feedback forum.

## Use This For
* The most important actions you want users to take on your site.

## Don't Use This For
*	Leading users between pages; use links instead.
*	Less important actions may be visually styled as links.

## How to Use This:
Use primary buttons for 

## Design Protocol
*	Only use one primary button per view or page
*	Use for actions that go to the next step (for example, “Submit”)
*	Button labels should be as short as possible with trigger words that clearly explain what will happen when the button is clicked (eg. Download, sign up).

## Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable.

## Behaviour
1.	Button label should appear underlined on hover

## Accessibility
This button has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

### Keyboard Navigation
* Supports tab navigation for use without a mouse

### Underline of Hover
* To support those with visual impairments and who may not be able to detect colour opacity changes

### Learn More
* Accessibility Contacts in Government
* Online Accessibility Testing Tools
* Accessibility Documentation

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others]

## Code
### HTML
```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <title>Primary Button</title>
  </head>
  <body>
    <button class="primarybutton" type="button" name="button">Submit</button>
  </body>
</html>
```

### CSS
```HTML
.primarybutton {
    background-color: #003366; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
    cursor: pointer;
}

.primarybutton:hover {
  text-decoration: underline;
  opacity: 0.9;
}
```
