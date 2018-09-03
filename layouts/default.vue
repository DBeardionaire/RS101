<template>
<el-container direction="vertical">
  <Header/>
  <el-main>
    <nuxt/>
  </el-main>
  <Footer/>
</el-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
