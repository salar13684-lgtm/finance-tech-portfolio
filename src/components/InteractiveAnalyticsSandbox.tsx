import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle,
  FileSpreadsheet,
  Database,
  BarChart2,
  Copy,
  Check,
  Code2,
  Filter,
  Sparkles
} from 'lucide-react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const sampleDataset = [
  {
    employeeId: 'EMP-1001',
    department: 'Human Resources',
    performance: 'A',
    salary: 62000,
    status: 'Clean'
  },
  {
    employeeId: 'EMP-1002',
    department: 'Finance',
    performance: 'A+',
    salary: 78500,
    status: 'Clean'
  },
  {
    employeeId: 'EMP-1003',
    department: 'Information Technology',
    performance: 'B+',
    salary: 84500,
    status: 'Clean'
  },
  {
    employeeId: 'EMP-1004',
    department: 'Sales',
    performance: 'A',
    salary: 69500,
    status: 'Missing Value Fixed'
  },
  {
    employeeId: 'EMP-1005',
    department: 'Marketing',
    performance: 'B',
    salary: 58000,
    status: 'Clean'
  },
  {
    employeeId: 'EMP-1006',
    department: 'Operations',
    performance: 'A',
    salary: 72500,
    status: 'Clean'
  },
  {
    employeeId: 'EMP-1007',
    department: 'Customer Support',
    performance: 'A+',
    salary: 54000,
    status: 'Duplicate Removed'
  }
];

const pythonScriptSnippet = `import pandas as pd
import numpy as np

def hr_analytics_workflow(file_path):
    df = pd.read_excel(file_path)

    df.drop_duplicates(inplace=True)
    df.fillna(method="ffill", inplace=True)

    df["Bonus"] = df["Salary"] * 0.15
    df["Net Salary"] = df["Salary"] + df["Bonus"]

    summary = df.groupby("Department").agg({
        "Salary": "mean",
        "Employee_ID": "count"
    })

    return summary`;

export const InteractiveAnalyticsSandbox: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [pipelineExecuted, setPipelineExecuted] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleRunPipeline = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setPipelineExecuted(true);
    }, 600);
  };

  const handleReset = () => {
    setPipelineExecuted(false);
    setSelectedRegion('All');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonScriptSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const filteredData = sampleDataset.filter(
    (row) => selectedRegion === 'All' || row.department === selectedRegion
  );

  const totalVolume = filteredData.reduce((acc, curr) => acc + curr.salary, 0);

  return (
    <section id="sandbox" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE LAB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Data Analytics Lab
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Explore my HR Analytics workflow using Python (Pandas), Excel, SQL, and Power BI to clean, transform, analyze, and visualize business data.
          </motion.p>
        </div>

        {/* Sandbox Container */}
        <div className="glass-card rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden">
          
          {/* Top Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-400">
                hr_analytics.py
                Python • Pandas • Excel Analytics
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRunPipeline}
                disabled={executing}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${executing ? 'animate-spin' : ''}`} />
                <span>{executing ? 'Processing...' : 'Run Analysis'}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 border border-slate-700/60 cursor-pointer"
                title="Reset Sandbox"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Code & Controls */}
            <div className="lg:col-span-6 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
              
              {/* Region Filter */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter Department
                </label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Human Resources', 'Finance', 'IT', 'Sales', 'Marketing'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                        selectedRegion === reg
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" /> HR ANALYTICS WORKFLOW
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-64">
                  <pre>{pythonScriptSnippet}</pre>
                </div>
              </div>

            </div>

            {/* Right Column: Execution Output & Chart */}
            <div className="lg:col-span-6 p-6 space-y-6 bg-slate-950/40">
              
              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Analysis Status</p>
                  <p className="font-display text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                    {pipelineExecuted ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">100% Validated & Processed</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Analysis Complete</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">
    <b>Employee Records</b>
  </p>
  <p className="font-display text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
    {filteredData.length.toLocaleString()} Records
  </p>
                </div>
              </div>

              {/* Real-time Trend Chart */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-cyan-400" /> Department Salary Analysis
                </span>

                <div className="h-48 w-full p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredData}>
                      <defs>
                        <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

<XAxis
  dataKey="department"
  stroke="#64748b"
  fontSize={10}
/>

<YAxis
  stroke="#64748b"
  fontSize={10}
/>

<Tooltip
  formatter={(value) => [`£${value.toLocaleString()}`, "Average Salary"]}
  contentStyle={{
    backgroundColor: "#0f172a",
    borderColor: "#334155",
    borderRadius: "8px",
    fontSize: "11px"
  }}
/>

<Bar
  type="monotone"
  dataKey="salary"
  stroke="#38bdf8"
  fillOpacity={1}
  fill="url(#salaryGrad)"
/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Ingested Records Table Preview */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> Analysis Results
                </span>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                  <table className="w-full text-left text-[11px] font-mono text-slate-300">
                    <thead className="bg-slate-950 text-slate-400 uppercase border-b border-slate-800">
                      <tr>
                        <th className="p-2.5">Employee ID</th>
                        <th className="p-2.5">Department</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5 text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredData.map((row) => (
                        <tr key={row.employeeId} className="hover:bg-slate-800/40">
                          <td className="p-2.5 text-cyan-300">{row.employeeId}</td>
                          <td className="p-2.5 text-slate-300">{row.department}</td>
                          <td className="p-2.5">
                            <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                              {row.status}
                            </span>
                          </td>
                          <td className="p-2.5 text-right font-semibold text-white">
                            ${row.salary.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
