import React from 'react';
import { 
  Paper, 
  TextField, 
  Button, 
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
  IconButton,
  ListSubheader
} from '@mui/material';
import { useFixStore } from '../store/fixStore';
import { MESSAGE_TEMPLATES } from '../utils/FixDictionary';
import { Download, Upload, RefreshCw, Play } from 'lucide-react';

export const FixInputPanel: React.FC = () => {
  const { 
    rawMessage, 
    setRawMessage, 
    parseMessage, 
    resetMessage, 
    loadTemplate,
    fixVersion,
    setFixVersion,
    delimiter,
    setDelimiter,
    selectedTemplate
  } = useFixStore();

  const handleExport = () => {
    const blob = new Blob([rawMessage], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fix-message.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setRawMessage(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>FIX Version</InputLabel>
            <Select
              value={fixVersion}
              label="FIX Version"
              onChange={(e) => setFixVersion(e.target.value)}
            >
              <MenuItem value="4.2">FIX 4.2</MenuItem>
              <MenuItem value="4.4">FIX 4.4</MenuItem>
              <MenuItem value="5.0">FIX 5.0</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Delimiter</InputLabel>
            <Select
              value={delimiter}
              label="Delimiter"
              onChange={(e) => setDelimiter(e.target.value)}
              defaultValue="\u0001"
            >
              <MenuItem value="\u0001">SOH</MenuItem>
              <MenuItem value="|">Pipe (|)</MenuItem>
              <MenuItem value=" ">Space</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Template</InputLabel>
            <Select
              value={selectedTemplate}
              label="Template"
              onChange={(e) => loadTemplate(e.target.value as keyof typeof MESSAGE_TEMPLATES)}
            >
              <ListSubheader>Session Layer</ListSubheader>
              <MenuItem value="logon">Logon</MenuItem>
              <MenuItem value="logout">Logout</MenuItem>
              <MenuItem value="heartbeat">Heartbeat</MenuItem>
              <MenuItem value="testRequest">Test Request</MenuItem>
              <MenuItem value="resendRequest">Resend Request</MenuItem>
              <MenuItem value="sequenceReset">Sequence Reset</MenuItem>
              <MenuItem value="reject">Session Reject</MenuItem>

              <ListSubheader>Order & Trade</ListSubheader>
              <MenuItem value="newOrder">New Order Single</MenuItem>
              <MenuItem value="newOrderList">New Order List</MenuItem>
              <MenuItem value="orderCancelRequest">Order Cancel Request</MenuItem>
              <MenuItem value="orderCancelReplace">Order Cancel/Replace</MenuItem>
              <MenuItem value="orderStatusRequest">Order Status Request</MenuItem>
              <MenuItem value="executionReport">Execution Report</MenuItem>
              <MenuItem value="tradeCaptureReport">Trade Capture Report</MenuItem>
              <MenuItem value="tradeCaptureReportRequest">Trade Capture Report Request</MenuItem>

              <ListSubheader>Market Data</ListSubheader>
              <MenuItem value="marketDataRequest">Market Data Request</MenuItem>
              <MenuItem value="marketDataSnapshot">Market Data Snapshot</MenuItem>
              <MenuItem value="marketDataIncrementalRefresh">Market Data Incremental Refresh</MenuItem>
              <MenuItem value="marketDataRequestReject">Market Data Request Reject</MenuItem>

              <ListSubheader>Security & Instrument</ListSubheader>
              <MenuItem value="securityDefinitionRequest">Security Definition Request</MenuItem>
              <MenuItem value="securityDefinition">Security Definition</MenuItem>
              <MenuItem value="securityStatusRequest">Security Status Request</MenuItem>
              <MenuItem value="securityStatus">Security Status</MenuItem>

              <ListSubheader>Risk & Margin</ListSubheader>
              <MenuItem value="collateralInquiry">Collateral Inquiry</MenuItem>
              <MenuItem value="collateralReport">Collateral Report</MenuItem>

              <ListSubheader>Trade Allocation</ListSubheader>
              <MenuItem value="allocationInstruction">Allocation Instruction</MenuItem>
              <MenuItem value="allocationInstructionAck">Allocation Instruction Ack</MenuItem>

              <ListSubheader>Position Management</ListSubheader>
              <MenuItem value="positionMaintenanceRequest">Position Maintenance Request</MenuItem>
              <MenuItem value="positionReport">Position Report</MenuItem>

              <ListSubheader>Administrative</ListSubheader>
              <MenuItem value="businessReject">Business Reject</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="news">News</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <TextField
          label="FIX Message Input"
          multiline
          rows={10}
          value={rawMessage}
          onChange={(e) => setRawMessage(e.target.value)}
          sx={{ 
            fontFamily: 'monospace',
            '& .MuiInputBase-input': {
              fontFamily: 'monospace'
            }
          }}
        />

        <Stack direction="row" spacing={2}>
          <Tooltip title="Simulate Message">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={parseMessage}
              startIcon={<Play size={18} />}
            >
              Simulate
            </Button>
          </Tooltip>

          <Tooltip title="Reset">
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={resetMessage}
              startIcon={<RefreshCw size={18} />}
            >
              Reset
            </Button>
          </Tooltip>

          <Tooltip title="Export Message">
            <IconButton onClick={handleExport} color="primary">
              <Download size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Import Message">
            <IconButton component="label" color="primary">
              <Upload size={18} />
              <input
                type="file"
                hidden
                accept=".txt,.fix"
                onChange={handleImport}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Paper>
  );
};