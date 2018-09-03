<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" title="Home">
        <nuxt-link to="/">
          <img height="50" alt="Realty School 101" src="/logo4-150x106.png">
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">Blog</el-menu-item>
      <el-submenu index="3">
        <template slot="title">Courses</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <nuxt-link to="/about">About</nuxt-link>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">Licensing</template>
        <el-menu-item index="5-1">
          Broker
        </el-menu-item>
        <el-menu-item index="5-2">
          Sales Associate
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
