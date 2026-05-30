import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, RotateCcw, Check, Sparkles, Terminal, Phone, Database, FileCode, CheckCircle, Smartphone
} from 'lucide-react';

interface LogLine {
  time: string;
  type: 'info' | 'success' | 'warn' | 'error';
  msg: string;
}

export default function InteractiveN8N() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentNode, setCurrentNode] = useState<number>(-1);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [personName, setPersonName] = useState('John Doe');
  const [personCompany, setPersonCompany] = useState('Acme Corp');
  const [personIntents, setPersonIntents] = useState('Lead Qualification Setup');
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll logs
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (msg: string, type: 'info' | 'success' | 'warn' | 'error' = 'info') => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs((prev) => [...prev, { time, type, msg }]);
  };

  const startWorkflowTest = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsFinished(false);
    setLogs([]);
    setCurrentNode(0);

    // Node 0: Webhook
    addLog(`POST request intercepted on /webhook/v1/lead-ingest`, 'info');
    addLog(`Validating payload signature... OK`, 'success');
    addLog(`Ingesting lead: Name="${personName}", Company="${personCompany}"`, 'info');
    
    await wait(2200);
    setCurrentNode(1);

    // Node 1: Code Parser
    addLog(`Running Node.js sandbox parser logic...`, 'info');
    addLog(`Cleaning strings & formatting timestamp...`, 'info');
    addLog(`Parsed output schema generated in 12ms.`, 'success');
    
    await wait(2200);
    setCurrentNode(2);

    // Node 2: OpenAI Agent
    addLog(`Sending prompt variables to OpenAI API (gpt-4o-mini)...`, 'info');
    addLog(`Invoking context embeddings matching CRM standard guidelines...`, 'info');
    addLog(`AI Evaluation: High value prospect flag: TRUE: Intent matches: "${personIntents}"`, 'success');
    addLog(`Proposed message: "Hello ${personName}, welcome to custom AI agent pipelines..."`, 'info');

    await wait(2200);
    setCurrentNode(3);

    // Node 3: HubSpot sync
    addLog(`Posting deal mapping in HubSpot platform...`, 'info');
    addLog(`Created DEAL ID: HS_B2B_93018 in stage "Prospect Qualified"`, 'success');
    addLog(`Assigned Account Executive territory: Region Global`, 'info');

    await wait(2200);
    setCurrentNode(4);

    // Node 4: WhatsApp Notification
    addLog(`Calling WhatsApp Cloud API gateway...`, 'info');
    addLog(`Dispatching approved template message: "Hello ${personName}, our agent has..."`, 'info');
    addLog(`Delivery Status: DELIVERED (Status Code 200)`, 'success');

    await wait(1800);
    setCurrentNode(5);
    setIsRunning(false);
    setIsFinished(true);
    addLog(`n8n Workflow Execution COMPLETE. Standard code 0 (Success).`, 'success');
  };

  const wait = (ms: number) => new Date().getTime() && new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <section id="n8n-playground" className="relative py-24 bg-gradient-to-b from-zinc-950 to-[#09090b] scroll-mt-20">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

      <div id="playground-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Agentic Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Interactive n8n Simulation Sandbox
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Test Ubaid Raza's modular lead validation workflow. Input credentials below, trigger the engine, and play as if you were looking at a live n8n active log!
          </p>
        </div>

        {/* Workspace Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left inputs details */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 text-left">
            <div className="flex flex-col gap-5">
              <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Payload Variables</span>
              </h3>
              
              <div className="flex flex-col gap-4 text-xs font-mono">
                
                {/* Variable Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-500">PROSPECT_NAME</label>
                  <input
                    id="playground-input-name"
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    disabled={isRunning}
                    className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Variable Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-500">PROSPECT_COMPANY</label>
                  <input
                    id="playground-input-company"
                    type="text"
                    value={personCompany}
                    onChange={(e) => setPersonCompany(e.target.value)}
                    disabled={isRunning}
                    className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Variable Intent */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-500">PROPOSED_INTENT</label>
                  <input
                    id="playground-input-intent"
                    type="text"
                    value={personIntents}
                    onChange={(e) => setPersonIntents(e.target.value)}
                    disabled={isRunning}
                    className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                  />
                </div>

              </div>
            </div>

            {/* Simulated webhook trigger btn */}
            <div className="mt-8 border-t border-zinc-900/60 pt-6">
              <button
                id="sandbox-run-btn"
                onClick={startWorkflowTest}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 text-black disabled:text-zinc-550 text-xs font-bold font-sans transition-all transition-transform duration-300 active:scale-98 shadow-lg select-none cursor-pointer"
              >
                {isRunning ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                    <span>Executing pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black" />
                    <span>Trigger Webhook Engine</span>
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-zinc-550 text-center font-mono mt-3 leading-normal">
                Webhook endpoint: API key authorized payload.
              </p>
            </div>
          </div>

          {/* Right Workflow visualizer & Logs outputs */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Upper Flow nodes map */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-center min-h-[140px] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-zinc-900/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="grid grid-cols-5 gap-3 items-center relative z-10">
                
                {/* Node 1 */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    currentNode === 0 ? 'bg-orange-950/20 border-orange-500/80 scale-110 shadow-[0_0_15px_rgba(255,108,55,0.2)]' :
                    currentNode > 0 ? 'bg-zinc-900 border-emerald-500' : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    <Terminal className={`w-4 h-4 ${currentNode === 0 ? 'text-orange-400 animate-pulse' : currentNode > 0 ? 'text-emerald-500' : 'text-zinc-500'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2">1. Webhook</span>
                </div>

                {/* Link Arrow */}
                <div className={`h-[1px] bg-gradient-to-r transition-all duration-300 ${
                  currentNode >= 1 ? 'from-emerald-500 to-emerald-400' : 'from-zinc-800 to-zinc-800'
                }`} />

                {/* Node 2 */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    currentNode === 1 ? 'bg-orange-950/20 border-orange-500/80 scale-110 shadow-[0_0_15px_rgba(255,108,55,0.2)]' :
                    currentNode > 1 ? 'bg-zinc-900 border-emerald-500' : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    <FileCode className={`w-4 h-4 ${currentNode === 1 ? 'text-orange-400 animate-pulse' : currentNode > 1 ? 'text-emerald-500' : 'text-zinc-500'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2">2. Parser</span>
                </div>

                {/* Link Arrow */}
                <div className={`h-[1px] bg-gradient-to-r transition-all duration-300 ${
                  currentNode >= 2 ? 'from-emerald-500 to-emerald-400' : 'from-zinc-800 to-zinc-800'
                }`} />

                {/* Node 3 */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    currentNode === 2 ? 'bg-orange-950/20 border-orange-500/80 scale-110 shadow-[0_0_15px_rgba(255,108,55,0.2)]' :
                    currentNode > 2 ? 'bg-zinc-900 border-emerald-500' : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    <Sparkles className={`w-4 h-4 ${currentNode === 2 ? 'text-orange-400 animate-pulse' : currentNode > 2 ? 'text-emerald-500' : 'text-zinc-500'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2">3. AI-Agent</span>
                </div>

                {/* Link Arrow */}
                <div className={`h-[1px] bg-gradient-to-r transition-all duration-300 ${
                  currentNode >= 3 ? 'from-emerald-500 to-emerald-400' : 'from-zinc-800 to-zinc-800'
                }`} />

                {/* Node 4 */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    currentNode === 3 ? 'bg-orange-950/20 border-orange-500/80 scale-110 shadow-[0_0_15px_rgba(255,108,55,0.2)]' :
                    currentNode > 3 ? 'bg-zinc-900 border-emerald-500' : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    <Database className={`w-4 h-4 ${currentNode === 3 ? 'text-orange-400 animate-pulse' : currentNode > 3 ? 'text-emerald-500' : 'text-zinc-500'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2">4. HubSpot</span>
                </div>

                {/* Link Arrow */}
                <div className={`h-[1px] bg-gradient-to-r transition-all duration-300 ${
                  currentNode >= 4 ? 'from-emerald-500 to-emerald-400' : 'from-zinc-800 to-zinc-800'
                }`} />

                {/* Node 5 */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    currentNode === 4 ? 'bg-orange-950/20 border-orange-500/80 scale-110 shadow-[0_0_15px_rgba(255,108,55,0.2)]' :
                    currentNode > 4 ? 'bg-zinc-900 border-emerald-500' : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    <Phone className={`w-4 h-4 ${currentNode === 4 ? 'text-orange-400 animate-pulse' : currentNode > 4 ? 'text-emerald-500' : 'text-zinc-500'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2">5. WhatsApp</span>
                </div>

              </div>

            </div>

            {/* Lower Logs Shell */}
            <div className="relative flex-1 bg-zinc-950 rounded-2xl border border-zinc-850 p-5 flex flex-col justify-between font-mono text-xs text-left text-zinc-400 h-[220px]">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5 mb-2.5">
                <span className="text-zinc-550 font-semibold flex items-center gap-1.5 uppercase text-[9px] tracking-widest">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Interactive execution output</span>
                </span>
                
                {/* Visual state dots representing success */}
                <div className="flex items-center gap-1.5 text-[9px] text-zinc-500">
                  <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-orange-400 animate-ping' : isFinished ? 'bg-emerald-500' : 'bg-zinc-800'}`} />
                  <span>{isRunning ? 'EXEC_ACTIVE' : isFinished ? 'COMPLETE' : 'STANDBY'}</span>
                </div>
              </div>

              {/* Logs Content area */}
              <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-2 max-h-[140px] text-[10px]">
                {logs.length === 0 ? (
                  <div className="text-zinc-650 h-full flex items-center justify-center italic text-xs">
                    Pipeline is empty. Modify payload parameters and click "Trigger Webhook Engine" above to preview real-time automated outputs.
                  </div>
                ) : (
                  logs.map((log, idx) => (
                    <div key={idx} className="flex gap-2 items-start leading-relaxed">
                      <span className="text-zinc-600 select-none font-bold">[{log.time}]</span>
                      <span className={`${
                        log.type === 'success' ? 'text-emerald-500' :
                        log.type === 'warn' ? 'text-orange-400' :
                        log.type === 'error' ? 'text-red-500' :
                        'text-zinc-400'
                      }`}>
                        {log.type === 'success' ? '✓' : log.type === 'error' ? '✖' : '→'}
                      </span>
                      <span className="text-zinc-300 font-light">{log.msg}</span>
                    </div>
                  ))
                )}
                <div ref={logsEndRef} />
              </div>

              {/* Visual simulated preview phone notification banner on complete */}
              <AnimatePresence>
                {isFinished && (
                  <motion.div
                    id="mock-notification-bubble"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-4 right-4 max-w-xs self-end bg-zinc-900 border border-emerald-500/25 p-3 rounded-xl flex items-start gap-2.5 shadow-xl"
                  >
                    <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/30">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="font-sans text-left">
                      <p className="text-[10px] font-bold text-white flex items-center gap-1">
                        <span>WhatsApp Automation Status</span> 
                        <span className="text-[9px] text-emerald-400 font-mono">(Live)</span>
                      </p>
                      <p className="text-[9px] text-zinc-400 leading-normal mt-0.5">
                        Inbound ticket: **HS_B2B_93018** validated. Personalized lead sync delivered to sales panel in HubSpot. WhatsApp broadcast sent to AE team.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
