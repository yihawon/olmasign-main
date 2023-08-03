var ctx = document.getElementById("teamChart").getContext("2d")

Chart.defaults.plugins.tooltip.enabled = false
var chart = new Chart(ctx, {
   type: "bar", //
   data: {
      labels: [""],
      datasets: [
         {
            label: "",
            fill: true,
            backgroundColor: "#099A96",
            borderColor: "transparent",
            data: [45, 135],
            borderRadius: 4,
            borderWidth: 2.5,
            fill: false,
         },
      ],
   },
   options: {
      maxBarThickness: 14,
      chartArea: {
         backgroundColor: "blue",
      },
      indexAxis: "y", //수평차트 만들기

      plugins: {
         datalabels: {},
         legend: {
            display: false,
         },
      },

      scales: {
         x: {
            grid: {
               display: false,
            },
            ticks: {
               display: false,
            },
         },
         y: {
            grid: {
               display: false,
            },
         },
      },
   },
})
