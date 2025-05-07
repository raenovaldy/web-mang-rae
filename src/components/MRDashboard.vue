<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
onMounted(() => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ['Category A', 'Category B', 'Category C', 'Category D'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [30, 20, 25, 25],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                        },
                    },
                });
            });
    
    onMounted(() => {
        const radarCtx = document.getElementById('radarChart').getContext('2d');
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4', 'Metric 5'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [65, 59, 90, 81, 56],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Dataset 2',
                        data: [28, 48, 40, 19, 96],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false,
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                    },
                },
            },
        });
    });

const images = [
                { src: 'src/assets/image1.png', alt: 'Image 1', caption: 'Caption 1' },
                { src: 'src/assets/image2.png', alt: 'Image 2', caption: 'Caption 2' },
                { src: 'src/assets/image3.png', alt: 'Image 3', caption: 'Caption 3' },
                { src: 'src/assets/image4.png', alt: 'Image 4', caption: 'Caption 4' },
            ];
</script>
<template>
    <div class="dashboard">
        <div class="jumbotron">
            <h1>WebKami Dashboard</h1>
            <p>Your one-stop solution for all your needs.</p>
        </div>
        <div class="articles">
            <h2>Chart</h2>
            <div class="charts">
                <div class="chart-container">
                    <h2>Pie Chart Visualization</h2>
                    <canvas id="pieChart"></canvas>
                </div>
                <div class="chart-container">
                    <h2>Radar Chart Visualization</h2>
                    <canvas id="radarChart"></canvas>
                </div>
            </div>
            <div class="image-gallery">
                <h2>Image Gallery</h2>
                <div class="gallery-grid">
                    <div class="gallery-item" v-for="(image, index) in images" :key="index">
                        <img :src="image.src" :alt="image.alt" />
                        <p>{{ image.caption }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .jumbotron {
        background-image: url('src/assets/walidiono.png');
        background-size: cover;
        background-position: center;
        background-blend-mode: luminosity;
        color: #ffffff;
        padding: 40px 100px;
        text-align: center;
        border-radius: 10px;
        text-shadow: #333 0px 0px 20px, #333 0px 0px 30px, #333 0px 0px 40px, #333 0px 0px 50px, #333 0px 0px 60px, #333 0px 0px 70px, #333 0px 0px 80px;
        }
    .articles {
        background-color: #7979795b;
        padding:70px;
        border-radius: 8px;
        margin: auto;
    }
    .articles h2 {
        text-align: center;
        margin-bottom: 20px;
    }


    .image-gallery {
                text-align: center;
            }
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }
            .gallery-item {
                background-color: #fff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .gallery-item img {
                width: 100%;
                height: auto;
                display: block;
            }
            .gallery-item p {
                padding: 10px;
                font-size: 14px;
                color: #333;
            }
            .chart-container {
                background-color: rgba(239, 239, 239, 0.719);
                margin: 20px auto;
                text-align: center;
                max-width: 300px;
            }
        .charts {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
            
</style>