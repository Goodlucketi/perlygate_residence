<script setup>
    // Import the Bar component from vue-chartjs and the necessary parts of Chart.js
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

// Register the components we want to use in Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

import { reactive } from 'vue'

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Define reactive chart data and options
const chartData = reactive({
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Occupancy Rate',
      backgroundColor: '#42A5F5',
      data: [65, 59, 80, 81, 56, 55, 60, 85, 70, 80, 95, 90],
      barThickness:10,
      
    },
  ],
})

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Monthly Occupancy Rate',
    },
  },
  scales: {
      x:{
          grid:{
          display:false,
        }
      },
      y:{
          grid:{
          display:false,
      }
      }
    }
})
</script>
  
<template>
    <main class="bg-slate-100 p-4 ml-8 my-4 rounded-xl">
        <h3 class="font-bold text-xl my-2">Occupancy Statistics</h3>
        <div class="overview-content flex justify-between items-center">
            <div>
                <div>
                   
                </div>
                
            </div>
           
        </div>
        <Bar :data="chartData" :options="chartOptions" />
    </main>
</template>

<style scoped>
  
</style>