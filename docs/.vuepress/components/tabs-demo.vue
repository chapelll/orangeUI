<template>
  <div class="tabs-wrapper">
    <o-tabs :selected.sync="selectedTab">
      <o-tabs-head>
        <o-tabs-item name='tab1'>娱乐</o-tabs-item>
        <o-tabs-item name='tab2'>财经</o-tabs-item>
        <o-tabs-item name='tab3'>体育</o-tabs-item>
        <o-tabs-item name='tab4' disabled>
          <o-icon name="buy"></o-icon>
          购物</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name='tab1'>娱乐新闻</o-tabs-pane>
        <o-tabs-pane name='tab2'>财经咨询</o-tabs-pane>
        <o-tabs-pane name='tab3'>体育报道</o-tabs-pane>
        <o-tabs-pane name='tab4'>购物推荐</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/Tabs'
  import TabsBody from '../../../src/Tabs-body'
  import TabsHead from '../../../src/Tabs-head'
  import TabsItem from '../../../src/Tabs-item'
  import TabsPane from '../../../src/Tabs-pane'
  import Icon from '../../../src/Icon'

  export default {
    components: {
      'o-tabs': Tabs, 'o-tabs-head': TabsHead, 'o-tabs-body': TabsBody, 'o-tabs-item': TabsItem,
      'o-tabs-pane': TabsPane, 'o-icon': Icon
    },
    data() { return { selectedTab: 'tab1' } }
  }
</script>
