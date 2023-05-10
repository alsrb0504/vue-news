<template lang="">
  <div class="user-container">
    <div>🙍🏻‍♂️</div>
    <div class="user-description">
      <!-- <router-link :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link>
      <div class="time">
        {{ fetchedItem.time_ago }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.78rem;
}
</style>
