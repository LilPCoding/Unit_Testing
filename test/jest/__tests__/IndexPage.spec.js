import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(HtmlComponent, {
      data () {
        return {
          title: 'I love Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('I love Vue.')
  })
})


