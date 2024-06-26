export const dicData = {
  code: "200",
  message: "操作成功",
  args: null,
  ext: null,
  data: {
    MENU_LANGUAGE: [
      {
        id: "SvgDemo",
        text: "图标库",
        extend: "",
      },
      {
        id: "Generator",
        text: "代码生成",
        extend: null,
      },
      {
        id: "Project",
        text: "项目列表",
        extend: "",
      },
      {
        id: "AlipayConfig",
        text: "生成示例-单表",
        extend: "",
      },
      {
        id: "DeviceInfo",
        text: "设备信息-主表",
        extend: "",
      },
      {
        id: "DeviceModel",
        text: "设备类型-子表",
        extend: "",
      },
      {
        id: "DeviceLogDetail",
        text: "设备日志-子表",
        extend: "",
      },
      {
        id: "API",
        text: "API文档",
        extend: "",
      },
      {
        id: "Announcement",
        text: "系统通告",
        extend: "",
      },
      {
        id: "FileManagement",
        text: "文件管理",
        extend: null,
      },
    ],
    REPORT_TYPE: [
      {
        id: "report_excel",
        text: "excel报表",
        extend: null,
      },
      {
        id: "report_screen",
        text: "大屏报表",
        extend: null,
      },
    ],
    MAP_PROPERTIES: [
      {
        id: "name",
        text: "名称name",
        extend: null,
      },
      {
        id: "value",
        text: "数值value",
        extend: null,
      },
    ],
    PIE_PROPERTIES: [
      {
        id: "name",
        text: "名称name",
        extend: null,
      },
      {
        id: "value",
        text: "数值value",
        extend: null,
      },
    ],
    COORD_PROPERTIES: [
      {
        id: "series",
        text: "数据",
        extend: null,
      },
      {
        id: "xAxis",
        text: "X轴",
        extend: null,
      },
      {
        id: "yAxis",
        text: "Y轴",
        extend: null,
      },
    ],
    SYS_CATA_TYPE: [
      {
        id: 1001,
        text: "行业01",
        extend: null,
      },
      {
        id: 1002,
        text: "行业02",
        extend: null,
      },
    ],
    ENABLE_FLAG: [
      {
        id: 1,
        text: "启用",
        extend: null,
      },
      {
        id: 0,
        text: "禁用",
        extend: null,
      },
    ],
    BAR_PROPERTIES: [
      {
        id: "xAxis",
        text: "x轴字段",
        extend: null,
      },
      {
        id: "bar",
        text: "柱状",
        extend: null,
      },
    ],
    BAR_LINE_PROPERTIES: [
      {
        id: "xAxis",
        text: "x轴字段",
        extend: null,
      },
      {
        id: "xAxis-hour",
        text: "x轴时间轴-时",
        extend: null,
      },
      {
        id: "xAxis-day",
        text: "x轴时间轴-天",
        extend: null,
      },
      {
        id: "xAxis-month",
        text: "x轴时间轴-月",
        extend: null,
      },
      {
        id: "xAxis-year",
        text: "时间轴-年",
        extend: null,
      },
      {
        id: "bar",
        text: "柱状",
        extend: null,
      },
      {
        id: "line",
        text: "折线",
        extend: null,
      },
    ],
    SOURCE_TYPE: [
      {
        id: "mysql",
        text: "mysql",
        extend:
          '[{"label":"driverName","value":"com.mysql.cj.jdbc.Driver","labelValue":"驱动类"},{"label":"jdbcUrl","value":"jdbc:mysql://127.0.0.1:3306/test_db?useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT%2B8","labelValue":"连接串"},{"label":"username","value":"root","labelValue":"用户名"},{"label":"password","value":"root","labelValue":"密码"}]',
      },
      {
        id: "oracle",
        text: "oracle",
        extend:
          '[{"label":"driverName","value":"oracle.jdbc.driver.OracleDriver","labelValue":"驱动类"},{"label":"jdbcUrl","value":"jdbc:oracle:thin:@//localhost:1521/orcl","labelValue":"连接串"},{"label":"username","value":"root","labelValue":"用户名"},{"label":"password","value":"root","labelValue":"密码"}]',
      },
      {
        id: "mssqlserver",
        text: "mssqlserver",
        extend:
          '[{"label":"driverName","value":"com.microsoft.sqlserver.jdbc.SQLServerDriver","labelValue":"驱动类"},{"label":"jdbcUrl","value":"jdbc:sqlserver://127.0.0.1:1433;DatabaseName=test_db","labelValue":"连接串"},{"label":"username","value":"root","labelValue":"用户名"},{"label":"password","value":"root","labelValue":"密码"}]',
      },
      {
        id: "elasticsearch_sql",
        text: "elasticsearch_sql",
        extend:
          '[{"label":"apiUrl","value":"http://10.108.26.164:9200/_xpack/sql?format=json","labelValue":"请求路径"},{"label":"method","value":"POST","labelValue":"请求方式"},{"label":"header","value":"{\\"Content-Type\\":\\"application/json\\"}","labelValue":"请求头"},{"label":"body","value":"{\\"query\\":\\"select 1\\"}","labelValue":"请求体"}]',
      },
      {
        id: "kudu_impala",
        text: "kudu impala",
        extend:
          '[{"label":"driverName","value":"com.cloudera.impala.jdbc41.Driver","labelValue":"驱动类"},{"label":"jdbcUrl","value":"jdbc:impala://10.108.3.111:21050/ods","labelValue":"连接串"},{"label":"username","value":"","labelValue":"用户名"},{"label":"password","value":"","labelValue":"密码"}]',
      },
      {
        id: "jdbc",
        text: "jdbc",
        extend:
          '[{"label":"driverName","value":"com.mysql.cj.jdbc.Driver","labelValue":"驱动类"},{"label":"jdbcUrl","value":"jdbc:mysql://127.0.0.1:3306/test_db?useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT%2B8","labelValue":"连接串"},{"label":"username","value":"root","labelValue":"用户名"},{"label":"password","value":"root","labelValue":"密码"}]',
      },
      {
        id: "http",
        text: "http",
        extend:
          '[{"label":"apiUrl","value":"https://gateway.test.com/api/getdata","labelValue":"请求路径"},{"label":"method","value":"POST","labelValue":"请求方式"},{"label":"header","value":"{\\"Content-Type\\":\\"application/json;charset=UTF-8\\"}","labelValue":"请求头"},{"label":"body","value":"{\\"username\\":\\"admin\\",\\"password\\":\\"de12878c0ef5beb7d8848c3af8f54afb\\",\\"verifyCode\\":\\"\\"}","labelValue":"请求体"}]',
      },
    ],
    FILTER_FLAG: [
      {
        id: 0,
        text: "已禁用",
        extend: null,
      },
      {
        id: 1,
        text: "已启用",
        extend: null,
      },
    ],
    SETTING_TYPE: [
      {
        id: "input",
        text: "字符串",
        extend: null,
      },
      {
        id: "input-number",
        text: "数字",
        extend: null,
      },
      {
        id: "textarea",
        text: "文本区域",
        extend: null,
      },
      {
        id: "code-select",
        text: "数据字典",
        extend: null,
      },
      {
        id: "select",
        text: "下拉列表",
        extend: null,
      },
      {
        id: "radio-group",
        text: "单选按钮",
        extend: null,
      },
      {
        id: "checkbox-group",
        text: "多选按钮",
        extend: null,
      },
      {
        id: "custom-form",
        text: "自定义表单",
        extend: null,
      },
    ],
    FILE_STATUS: [
      {
        id: "creating",
        text: "生成中",
        extend: null,
      },
      {
        id: "success",
        text: "生成成功",
        extend: null,
      },
      {
        id: "failed",
        text: "生成失败",
        extend: null,
      },
    ],
    LINE_PROPERTIES: [
      {
        id: "xAxis",
        text: "x轴字段",
        extend: null,
      },
      {
        id: "line",
        text: "折线",
        extend: null,
      },
    ],
    TRANSFORM_TYPE: [
      {
        id: "js",
        text: "js脚本",
        extend: null,
      },
      {
        id: "javaBean",
        text: "java脚本",
        extend: null,
      },
      {
        id: "dict",
        text: "字典翻译",
        extend:
          '{"dict1": {"1": "男","0": "女"},"dict2": {"mysql": "mysql","sqlserver": "sqlserver"}}',
      },
    ],
    INF_STATUS: [
      {
        id: 5,
        text: "审核通过",
        extend: null,
      },
    ],
    SOUTAR_PROPERTIES: [
      {
        id: "source",
        text: "源端",
        extend: null,
      },
      {
        id: "target",
        text: "目标端",
        extend: null,
      },
      {
        id: "value",
        text: "数值",
        extend: null,
      },
    ],
    CHART_PROPERTIES: [
      {
        id: "xAxis",
        text: "x轴字段",
        extend: null,
      },
      {
        id: "xAxis-hour",
        text: "时间轴-时",
        extend: null,
      },
      {
        id: "xAxis-day",
        text: "时间轴-天",
        extend: null,
      },
      {
        id: "xAxis-month",
        text: "时间轴-月",
        extend: null,
      },
      {
        id: "xAxis-year",
        text: "时间轴-年",
        extend: null,
      },
      {
        id: "bar",
        text: "柱状",
        extend: null,
      },
      {
        id: "line",
        text: "折线",
        extend: null,
      },
      {
        id: "name",
        text: "饼图/仪表盘/气泡地图name",
        extend: null,
      },
      {
        id: "value",
        text: "饼图/仪表盘/气泡地图value",
        extend: null,
      },
      {
        id: "text",
        text: "文本数字",
        extend: null,
      },
      {
        id: "yAxis",
        text: "y轴字段",
        extend: null,
      },
    ],
    SET_TYPE: [
      {
        id: "sql",
        text: "sql",
        extend: null,
      },
      {
        id: "http",
        text: "http",
        extend: null,
      },
    ],
    SHARE_VAILD: [
      {
        id: 0,
        text: "永久有效",
        extend: null,
      },
      {
        id: 1,
        text: "1天",
        extend: null,
      },
      {
        id: 7,
        text: "7天",
        extend: null,
      },
      {
        id: 30,
        text: "30天",
        extend: null,
      },
    ],
    REPORT_GROUP: [
      {
        id: "group_1",
        text: "分组1",
        extend: null,
      },
      {
        id: "group_2",
        text: "分组2",
        extend: null,
      },
      {
        id: "group_3",
        text: "分组3",
        extend: null,
      },
    ],
    DASHBOARD_PANEL_TYPE: [
      {
        id: "text",
        text: "文本",
        extend: null,
      },
      {
        id: "\r\nscrollingText",
        text: "滚动文本",
        extend: null,
      },
      {
        id: "hyperlinks",
        text: "超链接",
        extend: null,
      },
      {
        id: "currentTime",
        text: "当前时间",
        extend: null,
      },
      {
        id: "picture",
        text: "图片",
        extend: null,
      },
      {
        id: "rotatePictures",
        text: "轮播图片",
        extend: null,
      },
    ],
    FILTER_TYPE: [
      {
        id: "jsCalc",
        text: "js脚本",
        extend: null,
      },
      {
        id: "addField",
        text: "新增字段",
        extend: null,
      },
      {
        id: "replaceField",
        text: "替换字段",
        extend: null,
      },
      {
        id: "ipTransform",
        text: "ip解析java处理",
        extend: null,
      },
      {
        id: "vpnTransform",
        text: "vpn在线时长java处理",
        extend: null,
      },
    ],
    RULE_PARAM_TYPE: [
      {
        id: "int",
        text: "int",
        extend: null,
      },
    ],
    STACK_PROPERTIES: [
      {
        id: "xAxis",
        text: "x轴字段",
        extend: null,
      },
      {
        id: "xAxis-hour",
        text: "x轴时间轴-时",
        extend: null,
      },
      {
        id: "xAxis-day",
        text: "x轴时间轴-天",
        extend: null,
      },
      {
        id: "xAxis-month",
        text: "x轴时间轴-月",
        extend: null,
      },
      {
        id: "xAxis-year",
        text: "时间轴-年",
        extend: null,
      },
      {
        id: "yAxis",
        text: "y轴字段",
        extend: null,
      },
      {
        id: "bar",
        text: "柱状",
        extend: null,
      },
      {
        id: "line",
        text: "折线",
        extend: null,
      },
    ],
    SELECT_PROPERTIES: [
      {
        id: "label",
        text: "显示值",
        extend: null,
      },
      {
        id: "value",
        text: "提交值",
        extend: null,
      },
    ],
    DELETE_FLAG: [
      {
        id: 1,
        text: "已删除",
        extend: null,
      },
      {
        id: 0,
        text: "未删除",
        extend: null,
      },
    ],
    SYSTEM_CODE: [
      {
        id: "CTS-PC",
        text: "CTS电脑端",
        extend: null,
      },
      {
        id: "CTS-APP",
        text: "CTS App端",
        extend: null,
      },
    ],
    LOCALE: [
      {
        id: "zh",
        text: "中文",
        extend: null,
      },
      {
        id: "en",
        text: "英文",
        extend: null,
      },
    ],
    PUSH_TYPE: [
      {
        id: "appsp",
        text: "APP端",
        extend: null,
      },
    ],
    TEXT_PROPERTIES: [
      {
        id: "text",
        text: "文本数字",
        extend: null,
      },
    ],
    RADAR_PROPERTIES: [
      {
        id: "name",
        text: "名称",
        extend: null,
      },
      {
        id: "radar",
        text: "雷达顶点",
        extend: null,
      },
    ],
    AUDIT_FLAG: [
      {
        id: "waiting",
        text: "待审核",
        extend: null,
      },
      {
        id: "ongoing",
        text: "审核中",
        extend: null,
      },
      {
        id: "approved",
        text: "通过",
        extend: null,
      },
      {
        id: "rejected",
        text: "拒绝",
        extend: null,
      },
    ],
    REQUIRED_FLAG: [
      {
        id: 1,
        text: "必填",
        extend: null,
      },
      {
        id: 0,
        text: "非必填",
        extend: null,
      },
    ],
    MAP_V2_PROPERTIES: [
      {
        id: "name",
        text: "地址名称",
        extend: null,
      },
      {
        id: "longitude",
        text: "经度坐标",
        extend: null,
      },
      {
        id: "latitude",
        text: "维度坐标",
        extend: null,
      },
      {
        id: "value",
        text: "数值",
        extend: null,
      },
    ],
  },
};
