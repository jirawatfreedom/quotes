<template>
  <div class="container">
    <div class="row">
      <div className="col-sm-8">
        <h1>Http</h1>
        <fieldset class="form-group">
          <label for="formGroupExampleInput">UserName</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="UserName"
            v-model="user.username"
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="formGroupExampleInput2">Mail</label>
          <input
            type="email"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Mail"
            v-model="user.email"
          />
        </fieldset>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <hr />
        <button type="button" @click="fetchData" class="btn btn-primary">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users" :key="u.email">
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
      users: [],
    };
  },
  methods: {
    submit() {
      console.log(this.user);
      this.$http.post('https://quotes-2931f.firebaseio.com/data.json', this.user).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    fetchData() {
      console.log(this.user);
      this.$http
        .get('https://quotes-2931f.firebaseio.com/data.json')
        .then(response => response.json())
        .then((data) => {
          const resultArray = [];
          for (const key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
  },
};
</script>

<style></style>
