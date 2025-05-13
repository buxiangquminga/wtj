import {use} from 'echarts/core';

// import ECharts modules manually to reduce bundle size
import {SVGRenderer} from 'echarts/renderers';
import {BarChart, GaugeChart, LineChart, LinesChart, PieChart} from 'echarts/charts';
import {GridComponent, TooltipComponent, TitleComponent,LegendComponent,VisualMapComponent,ToolboxComponent,DataZoomComponent} from 'echarts/components';

export default defineNuxtPlugin(() => {
    use([SVGRenderer, BarChart, GaugeChart, LinesChart, LineChart, PieChart, GridComponent, TooltipComponent,TitleComponent,LegendComponent,VisualMapComponent,ToolboxComponent,DataZoomComponent]);
});