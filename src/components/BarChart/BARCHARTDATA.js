
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    PointElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );
 
  export const   plugins= {
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      console.log(chart)
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'lightGreen';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  }
  export const options = {
    responsive: true,
  };
  
  const labels = ['','','January', '','', 'February','','',
    'March','','',  'April','','', 
     'May','','',  'June', '','', 'July','','', ];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        type: 'line',
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * (400 - 0 + 1) + 0),
        backgroundColor: "rgba(22, 108, 149, 0.3)",
        borderColor: "rgba(33, 61, 76, 0.8)",
        borderJoinStyle:'round',
        pointRadius: 0,
    
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * (1000 - 0 + 1) + 0),
        backgroundColor: '#1676a8',
      },
    ],
   
  };
  