<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>

      <h1>人口の推移</h1>

      <v-ons-select v-model="selected_city">
        <option v-for="city in city_list">
          {{ city }}
        </option>
      </v-ons-select>

      <canvas id="myChart" height="400"></canvas>

    </v-ons-page>
</template>
<script>

  import jinkou from "./js/jinkou"

  export default{
    data() {
      return {
        ctx: null,
        myChart: null,
        title: 'グラフアプリ',
        city_list: Object.keys(jinkou.jinkou_list),
        selected_city: "市全体",
        label_data: Object.keys(jinkou.jinkou_list["市全体"]),
        graph_data: Object.values(jinkou.jinkou_list["市全体"])
      };
    },
    mounted: function(){
      this.ctx = document.getElementById('myChart').getContext('2d');
      this.myChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
              labels: this.label_data,
              datasets: [{
                  label: this.selected_city,
                  data: this.graph_data,
              }]
          }
      });
    },
    methods: {
    },
    watch:{
      selected_city: function(){
        this.label_data = Object.keys(jinkou.jinkou_list[this.selected_city]),
        this.graph_data = Object.values(jinkou.jinkou_list[this.selected_city])

        /* データの更新 */
        this.myChart.data.labels = this.label_data;
        this.myChart.data.datasets.label = this.selected_city;
        this.myChart.data.datasets.forEach((dataset) => {
          dataset.data = this.graph_data;
        });
        this.myChart.update();
      }
    }
  };
</script>
