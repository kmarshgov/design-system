## Help Text
Help text instructs users on how to fill out an input field, provides more context about what is required or gives instructions on where to find the information.

### Example
[iframe]

### Design Guidance
*	Position help text above the input field and below the label
*	Do not position help text below the input field
*	Use the provided gray colour to differentiate help text from the label
* Avoid placing help text in tooltips or pop up windows. 

### Accessibility
#### Screen Readers
Help text should be explicitly associated with the input field it relates to using the `aria-describedby` attribute. When a user enters or focuses on an input field the screen reader will announce the label and help text. 
#### Colour Contrast
The gray colour used for the help text meets the minimum colour contrast requirements for WCAG AA 2.0.

## HTML
```html
<form>
      <div class="bcgov-text-label">
        <label>Input label</label>
      </div>
      <span class=”bcgov-hint-text” id=”inputname” >You’ll be sent updates to this email</span>
      <input class="bcgov-text-input" type="text" name="labelname" aria-descripedby=”inputname”>
</form>
```

## CSS
```css
.bcgov-hint-text {
  color: #70777C;
  font-size: 16px;
}
```
