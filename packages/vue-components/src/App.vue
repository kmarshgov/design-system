<template>
  <div>
    <Header title="B.C. Design System Kitchen Sink" />
    <main>
      <h1>Vue Components</h1>
      
      <section>
        <h2>Alert Banner Examples</h2>
        <AlertBanner variant="error">The email address cannot be empty.</AlertBanner>
        <AlertBanner variant="warning">
          The <a href="#">eligibility requirements</a> for this service have changed. Review the changes before continuing.
        </AlertBanner>
        <AlertBanner variant="info">The deadline for submission has been extended to March 1, 2020.</AlertBanner>
        <AlertBanner variant="success">Your application has been successfully submitted.</AlertBanner>
      </section>

      <section>
        <h2>Inline Alert Examples</h2>
        <p>This is normal text with an <InlineAlert variant="error">error alert</InlineAlert> inline.</p>
        <p>This is normal text with a <InlineAlert variant="warning">warning alert</InlineAlert> inline.</p>
        <p>This is normal text with an <InlineAlert variant="info">info alert</InlineAlert> inline.</p>
        <p>This is normal text with a <InlineAlert variant="success">success alert</InlineAlert> inline.</p>
      </section>

      <section>
        <h2>Callout Examples</h2>
        <Callout>
          <p>By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.</p>
        </Callout>
      </section>

      <section>
        <h2>Button Examples</h2>
        <Button @click="handleClick">Primary Button</Button>
        <Button variant="secondary" @click="handleClick">Secondary Button</Button>
        <Button variant="tertiary" @click="handleClick">Tertiary Button</Button>
        <Button variant="link" @click="handleClick">Link Button</Button>
        <Button size="small" @click="handleClick">Small Button</Button>
        <Button danger @click="handleClick">Danger Button</Button>
        <Button is-icon-button @click="handleClick">
          <SvgMenuIcon />
        </Button>
      </section>

      <section>
        <h2>Text Field Examples</h2>
        <TextField
          v-model="textFieldValue"
          label="First Name"
          placeholder="Enter your first name"
          helper-text="This field is required"
        />
        <TextField
          v-model="emailValue"
          type="email"
          label="Email Address"
          :error-message="emailError"
        />
      </section>

      <section>
        <h2>Text Area Examples</h2>
        <TextArea
          v-model="textAreaValue"
          label="Can you provide more detail?"
          :rows="4"
          :cols="60"
          placeholder="Enter your detailed response here..."
        />
      </section>

      <section>
        <h2>Checkbox Group Examples</h2>
        <CheckboxGroup
          v-model="selectedCheckboxes"
          legend="Choose your preferences"
          :options="checkboxOptions"
          @change="handleCheckboxChange"
        />
        <p v-if="selectedCheckboxes.length">Selected: {{ selectedCheckboxes.join(', ') }}</p>
      </section>

      <section>
        <h2>Radio Group Examples</h2>
        <RadioGroup
          v-model="selectedRadio"
          legend="Choose one option"
          :options="radioOptions"
          @change="handleRadioChange"
        />
        <p v-if="selectedRadio">Selected: {{ selectedRadio }}</p>
      </section>

      <section>
        <h2>Switch Examples</h2>
        <Switch
          v-model="switchValue"
          label="Enable notifications"
          @change="handleSwitchChange"
        />
        <p>Switch is {{ switchValue ? 'ON' : 'OFF' }}</p>
      </section>

      <section>
        <h2>Select Examples</h2>
        <Select
          label="Choose an option"
          :items="selectItems"
          v-model="selectedValue"
          @change="handleSelectChange"
        />
        <p v-if="selectedValue">Selected: {{ selectedValue }}</p>
      </section>

      <section>
        <h2>Accordion Group Examples</h2>
        <AccordionGroup
          :items="accordionItems"
          :allow-multiple="true"
          :default-open="[0]"
          @toggle="handleAccordionToggle"
        />
      </section>

      <section>
        <h2>Dialog Examples</h2>
        <Button @click="openDialog">Open Dialog</Button>
        <Dialog
          :is-open="isDialogOpen"
          title="Example Dialog"
          @close="closeDialog"
        >
          <p>This is the content of the dialog. You can put any content here.</p>
          <template #footer>
            <Button variant="secondary" @click="closeDialog">Cancel</Button>
            <Button @click="closeDialog">Confirm</Button>
          </template>
        </Dialog>
      </section>

      <section>
        <h2>Tag Examples</h2>
        <Tag text-value="Blue Tag" color="blue" />
        <Tag text-value="Green Tag" color="green" />
        <Tag text-value="Red Tag" color="red" />
        <Tag text-value="Removable Tag" color="bc-blue" :allows-removing="true" @remove="handleTagRemove" />
      </section>

      <section>
        <h2>TagGroup and TagList Examples</h2>
        <TagGroup label="Categories" description="Select your categories">
          <TagList
            :items="tagListItems"
            orientation="horizontal"
            @tag-remove="handleTagListRemove"
          />
        </TagGroup>
      </section>

      <section>
        <h2>Tooltip Examples</h2>
        <Tooltip content="This is a tooltip" placement="top">
          <Button variant="secondary">Hover for tooltip</Button>
        </Tooltip>
      </section>
    </main>

    <Footer
      :hide-acknowledgement="false"
      :hide-logo-and-links="false"
      :hide-copyright="false"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { 
  AccordionGroup,
  AlertBanner,
  Button,
  Callout,
  CheckboxGroup,
  Dialog,
  Header,
  Footer,
  InlineAlert,
  RadioGroup,
  Select,
  Switch,
  Tag,
  TagGroup,
  TagList,
  TextArea,
  TextField,
  Tooltip
} from '@/components'

export default {
  name: 'App',
  components: {
    AccordionGroup,
    AlertBanner,
    Button,
    Callout,
    CheckboxGroup,
    Dialog,
    Header,
    Footer,
    InlineAlert,
    RadioGroup,
    Select,
    Switch,
    Tag,
    TagGroup,
    TagList,
    TextArea,
    TextField,
    Tooltip,
    SvgMenuIcon: defineComponent({
      template: `
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2394_735)">
            <path
              d="M15.8899 14.5114C16.2727 14.5114 16.5966 14.8395 16.5966 15.2571C16.5966 15.645 16.2727 15.9432 15.8899 15.9432H4.08158C3.69877 15.9432 3.4043 15.645 3.4043 15.2274C3.4043 14.8395 3.69877 14.5114 4.08158 14.5114H15.8899ZM15.8899 4.96594C16.2727 4.96594 16.5966 5.35373 16.5966 5.71168C16.5966 6.09947 16.2727 6.39777 15.8899 6.39777H4.08158C3.69877 6.39777 3.4043 6.0398 3.4043 5.68186C3.4043 5.29407 3.69877 4.96594 4.08158 4.96594H15.8899ZM15.8899 9.73867C16.2727 9.73867 16.5966 10.0668 16.5966 10.4546C16.5966 10.8722 16.2727 11.1705 15.8899 11.1705H4.08158C3.69877 11.1705 3.4043 10.8722 3.4043 10.4546C3.4043 10.0668 3.69877 9.73867 4.08158 9.73867H15.8899Z"
              fill="#2D2D2D"
            />
          </g>
          <defs>
            <clipPath id="clip0_2394_735">
              <rect
                width="14"
                height="12"
                fill="white"
                transform="translate(3 4)"
              />
            </clipPath>
          </defs>
        </svg>
      `
    })
  },
  data() {
    return {
      selectedValue: null,
      textFieldValue: '',
      emailValue: '',
      emailError: null,
      textAreaValue: '',
      selectedCheckboxes: [],
      selectedRadio: null,
      switchValue: false,
      isDialogOpen: false,
      selectItems: [
        { id: 'option1', label: 'Option 1', description: 'First option' },
        { id: 'option2', label: 'Option 2', description: 'Second option' },
        { id: 'option3', label: 'Option 3', description: 'Third option' }
      ],
      checkboxOptions: [
        { value: 'option1', label: 'Newsletter subscription', disabled: false },
        { value: 'option2', label: 'SMS notifications', disabled: false },
        { value: 'option3', label: 'Email updates', disabled: false },
        { value: 'option4', label: 'Disabled option', disabled: true }
      ],
      radioOptions: [
        { value: 'small', label: 'Small', disabled: false },
        { value: 'medium', label: 'Medium', disabled: false },
        { value: 'large', label: 'Large', disabled: false },
        { value: 'extra-large', label: 'Extra Large (disabled)', disabled: true }
      ],
      accordionItems: [
        {
          title: 'Section 1',
          content: 'This is the content of the first accordion section. It can contain any HTML content.'
        },
        {
          title: 'Section 2',
          content: 'This is the content of the second accordion section. You can have multiple paragraphs and other elements here.'
        },
        {
          title: 'Section 3',
          content: 'This is the content of the third accordion section. Each section can be opened and closed independently.'
        }
      ],
      tagListItems: [
        { id: 'tag1', textValue: 'Tag 1', color: 'blue', allowsRemoving: true },
        { id: 'tag2', textValue: 'Tag 2', color: 'green', allowsRemoving: true },
        { id: 'tag3', textValue: 'Tag 3', color: 'red', allowsRemoving: true }
      ]
    }
  },
  methods: {
    handleClick(event) {
      console.log('Button clicked:', event)
      alert('Button clicked!')
    },
    handleSelectChange(event) {
      console.log('Select changed:', event)
    },
    handleCheckboxChange(values) {
      console.log('Checkbox group changed:', values)
    },
    handleRadioChange(value) {
      console.log('Radio group changed:', value)
    },
    handleSwitchChange(value) {
      console.log('Switch changed:', value)
    },
    handleAccordionToggle(event) {
      console.log('Accordion toggled:', event)
    },
    openDialog() {
      this.isDialogOpen = true
    },
    closeDialog() {
      this.isDialogOpen = false
    },
    handleTagRemove(event) {
      console.log('Tag removed:', event)
    },
    handleTagListRemove(event) {
      console.log('Tag list item removed:', event)
      this.tagListItems = this.tagListItems.filter(item => item.id !== event.id)
    }
  }
}
</script>