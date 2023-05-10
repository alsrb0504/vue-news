<template lang="">
  <div>
    <list-item></list-item> 
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>
<style scoped></style>
