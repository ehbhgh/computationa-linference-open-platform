<!--
 * @Descripttion: 大屏设计器 -- 预览
 * @Author: wangsu
 * @Date: 2021-3-13 11:04:24
 * @Last Modified by:   wangsu
 * @Last Modified time: 2024-3-13 11:04:24
 !-->
<template>
  <div class="layout">
    <div :style="bigScreenStyle">
      <widget
        v-for="(widget, index) in widgets"
        :key="index"
        v-model="widget.value"
        :index="index"
        :type="widget.type"
      />
    </div>
  </div>
</template>

<script>
import widget from "../designer/widget/temp";
export default {
  name: "viewer",
  components: {
    widget
  },
  data() {
    return {
      bigScreenStyle: {},
      widgets: []
    };
  },
  mounted() {
  },
  methods: {
    async getData() {
      const reportCode = this.$route.query.reportCode;
      //根据code预览、查询大屏详情
      const { code, data } = await detailDashboard(reportCode);
      if (code != 200) return;
      const equipment = document.body.clientWidth;
      const ratioEquipment = equipment / data.dashboard.width;
      this.bigScreenStyle = {
        width: data.dashboard.width + "px",
        height: data.dashboard.height + "px",
        "background-color": data.dashboard.backgroundColor,
        "background-image": "url(" + data.dashboard.backgroundImage + ")",
        "background-position": "0% 0%",
        "background-size": "100% 100%",
        "background-repeat": "initial",
        "background-attachment": "initial",
        "background-origin": "initial",
        "background-clip": "initial",
        transform: `scale(${ratioEquipment}, ${ratioEquipment})`,
        "transform-origin": "0 0"
      };
      data.dashboard.widgets.forEach((item, index) => {
        item.value.widgetId = item.value.setup.widgetId
        item.value.widgetCode = item.value.setup.widgetCode
        if (item.value.setup.componentLinkage && item.value.setup.componentLinkage.length) {
          this.$store.commit('SET_ALL_COMPONENT_LINKAGE', {
            index,
            widgetId: item.value.widgetId,
            linkageArr: item.value.setup.componentLinkage
          })
        }
      })
      this.widgets = data.dashboard.widgets;
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  text-align: center;
}
.bottom-text {
  width: 100%;
  color: #a0a0a0;
  position: fixed;
  bottom: 16px;
  z-index: 9999;
}
</style>
