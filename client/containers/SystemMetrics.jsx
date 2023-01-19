import React, { useState, useEffect } from 'react';
import cpu from '../components/metrics/Cpu.jsx';
import CPU from '../components/metrics/Cpu.jsx';
import Memory from '../components/metrics/Memory.jsx';
import CpuPer from '../components/metrics/CpuPer.jsx';
import MemPer from '../components/metrics/MemPer.jsx';
import Legend from '../components/Legend.jsx';

const systemMetrics = ({ totals, activeContainers }) => {
  const memPieData = [];
  const memPieLabels = [];
  const cpuPieData = [];
  const cpuPieLabels = [];
  const legend = [];
  for (let i = 0; i < activeContainers.length; i++) {
    memPieLabels.push(activeContainers[i].Names);
    cpuPieLabels.push(activeContainers[i].Names);
    legend.push(activeContainers[i].Names);
    let memArr = activeContainers[i].memory.value;
    let cpuArr = activeContainers[i].cpu.value;
    memPieData.push(memArr[memArr.length - 1]);
    cpuPieData.push(cpuArr[cpuArr.length - 1]);
  }
  // console.log('memPieData', memPieData);
  // console.log('memPieLabels', memPieLabels);
  // console.log('cpuPieData', cpuPieData);
  // console.log('cpuPieLabels', cpuPieLabels);

  //const {cpu, memory} = totals
  const totalmetrics = totals ? totals : {};

  return (
    <>
      <div className="SystemMetrics">
        <CPU className="liquidGauge" totals={totalmetrics} />
        <Memory className="liquidGauge" totals={totalmetrics} />
        <CpuPer cpuData={cpuPieData} cpuLabels={cpuPieLabels} />
        <MemPer memData={memPieData} memLabels={memPieLabels} />
        <Legend names={legend} cpuData={cpuPieData} memData={memPieData} />
      </div>
    </>
  );
};

export default systemMetrics;
