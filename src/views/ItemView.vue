<template>
  <div>
    <section>
      <!-- 질문 -->
      <UserProfile :info=fetchedItem>
        <!-- <template v-slot:username>{{ fetchedItem.user }}</template> -->
        <template v-slot:username >
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </template>
        <template v-slot:time>{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </UserProfile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${ itemInfo.user }`">
            {{ itemInfo.user }}
          </router-link>
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>