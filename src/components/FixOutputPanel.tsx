import React from 'react';
import { 
  Paper, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Tooltip,
  Box
} from '@mui/material';
import { useFixStore } from '../store/fixStore';
import { FIX_DICTIONARY } from '../utils/FixDictionary';

export const FixOutputPanel: React.FC = () => {
  const { parsedMessage, validationErrors } = useFixStore();

  return (
    <Paper sx={{ p: 2, height: '100%', overflow: 'auto' }}>
      {validationErrors.length > 0 && (
        <Box sx={{ mb: 3, p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
          <Typography variant="h6" color="error.dark">Validation Errors:</Typography>
          {validationErrors.map((error, index) => (
            <Typography key={index} color="error.dark" variant="body2">
              • {error}
            </Typography>
          ))}
        </Box>
      )}

      {parsedMessage && (
        <>
          <Typography variant="h6" gutterBottom>Parsed Message:</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tag</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parsedMessage.fields.map((field, index) => {
                  const fieldDef = FIX_DICTIONARY[field.tag];
                  const hasError = field.error || validationErrors.some(err => err.includes(field.tag.toString()));
                  
                  return (
                    <Tooltip
                      key={index}
                      title={fieldDef?.description || 'Unknown field'}
                      placement="top"
                    >
                      <TableRow 
                        sx={{ 
                          bgcolor: hasError ? 'error.light' : 'inherit',
                          '&:hover': {
                            bgcolor: hasError ? 'error.light' : 'action.hover'
                          }
                        }}
                      >
                        <TableCell>{field.tag}</TableCell>
                        <TableCell>{fieldDef?.name || 'Unknown'}</TableCell>
                        <TableCell>
                          {field.value}
                          {fieldDef?.values && fieldDef.values[field.value] && (
                            <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                              ({fieldDef.values[field.value]})
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {fieldDef?.description || 'Unknown field'}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </Tooltip>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Paper>
  );
};