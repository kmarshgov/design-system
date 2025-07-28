<template>
  <div>
    <Header title="B.C. Design System Kitchen Sink" />
    <main>
      <h1>Vue Components</h1>
      
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
import { Button, Header, Footer, Select, Tag, TagGroup, TagList, Tooltip } from '@/components'

export default {
  name: 'App',
  components: {
    Button,
    Header,
    Footer,
    Select,
    Tag,
    TagGroup,
    TagList,
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
      selectItems: [
        { id: 'option1', label: 'Option 1', description: 'First option' },
        { id: 'option2', label: 'Option 2', description: 'Second option' },
        { id: 'option3', label: 'Option 3', description: 'Third option' }
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