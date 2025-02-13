// FIX Dictionary mapping tags to their human-readable names and possible values
export interface FixFieldDefinition {
  name: string;
  description: string;
  values?: Record<string, string>;
}

export const FIX_DICTIONARY: Record<number, FixFieldDefinition> = {
  8: {
    name: 'BeginString',
    description: 'Identifies beginning of new message and protocol version'
  },
  9: {
    name: 'BodyLength',
    description: 'Message body length'
  },
  10: {
    name: 'CheckSum',
    description: 'Three byte, simple checksum'
  },
  11: {
    name: 'ClOrdID',
    description: 'Unique identifier for Order as assigned by institution'
  },
  21: {
    name: 'HandlInst',
    description: 'Instructions for order handling',
    values: {
      '1': 'Automated execution order, private',
      '2': 'Automated execution order, public',
      '3': 'Manual order, best execution'
    }
  },
  34: {
    name: 'MsgSeqNum',
    description: 'Message sequence number'
  },
  35: {
    name: 'MsgType',
    description: 'Defines message type',
    values: {
      '0': 'Heartbeat',
      '1': 'Test Request',
      '2': 'Resend Request',
      '3': 'Reject',
      '4': 'Sequence Reset',
      '5': 'Logout',
      '8': 'Execution Report',
      'A': 'Logon',
      'B': 'News',
      'C': 'Email',
      'D': 'New Order Single',
      'E': 'New Order List',
      'F': 'Order Cancel Request',
      'G': 'Order Cancel Replace Request',
      'H': 'Order Status Request',
      'V': 'Market Data Request',
      'W': 'Market Data Snapshot',
      'X': 'Market Data Incremental Refresh',
      'Y': 'Market Data Request Reject',
      'j': 'Business Message Reject'
    }
  },
  38: {
    name: 'OrderQty',
    description: 'Quantity ordered'
  },
  40: {
    name: 'OrdType',
    description: 'Order type',
    values: {
      '1': 'Market',
      '2': 'Limit',
      '3': 'Stop',
      '4': 'Stop limit'
    }
  },
  44: {
    name: 'Price',
    description: 'Price per unit of quantity'
  },
  49: {
    name: 'SenderCompID',
    description: 'Identifies message sender'
  },
  52: {
    name: 'SendingTime',
    description: 'Time of message transmission'
  },
  54: {
    name: 'Side',
    description: 'Side of order',
    values: {
      '1': 'Buy',
      '2': 'Sell',
      '3': 'Buy minus',
      '4': 'Sell plus'
    }
  },
  55: {
    name: 'Symbol',
    description: 'Ticker symbol'
  },
  56: {
    name: 'TargetCompID',
    description: 'Identifies message target'
  },
  60: {
    name: 'TransactTime',
    description: 'Time of execution/order creation'
  },
  98: {
    name: 'EncryptMethod',
    description: 'Method of encryption',
    values: {
      '0': 'None/Other',
      '1': 'PKCS',
      '2': 'DES',
      '3': 'PKCS/DES',
      '4': 'PGP/DES',
      '5': 'PGP/DES-MD5',
      '6': 'PEM/DES-MD5'
    }
  },
  108: {
    name: 'HeartBtInt',
    description: 'Heartbeat interval (seconds)'
  },
  17: {
    name: 'ExecID',
    description: 'Unique identifier of execution message'
  },
  20: {
    name: 'ExecTransType',
    description: 'Identifies transaction type',
    values: {
      '0': 'New',
      '1': 'Cancel',
      '2': 'Correct',
      '3': 'Status'
    }
  },
  31: {
    name: 'LastPx',
    description: 'Price of last fill'
  },
  32: {
    name: 'LastQty',
    description: 'Quantity of last fill'
  },
  37: {
    name: 'OrderID',
    description: 'Unique identifier for order'
  },
  39: {
    name: 'OrdStatus',
    description: 'Identifies current status of order',
    values: {
      '0': 'New',
      '1': 'Partially filled',
      '2': 'Filled',
      '3': 'Done for day',
      '4': 'Canceled',
      '5': 'Replaced',
      '6': 'Pending Cancel',
      '7': 'Stopped',
      '8': 'Rejected',
      '9': 'Suspended',
      'A': 'Pending New',
      'B': 'Calculated',
      'C': 'Expired'
    }
  },
  41: {
    name: 'OrigClOrdID',
    description: 'Original Client Order ID for cancel/replace'
  },
  45: {
    name: 'RefSeqNum',
    description: 'Reference message sequence number'
  },
  58: {
    name: 'Text',
    description: 'Free format text message'
  },
  112: {
    name: 'TestReqID',
    description: 'Test request ID for heartbeat verification'
  },
  146: {
    name: 'NoRelatedSym',
    description: 'Number of related symbols'
  },
  262: {
    name: 'MDReqID',
    description: 'Market Data Request ID'
  },
  263: {
    name: 'SubscriptionRequestType',
    description: 'Market data subscription type',
    values: {
      '0': 'Snapshot',
      '1': 'Subscribe',
      '2': 'Unsubscribe'
    }
  },
  264: {
    name: 'MarketDepth',
    description: 'Depth of market for book data'
  },
  265: {
    name: 'MDUpdateType',
    description: 'Type of market data update',
    values: {
      '0': 'Full refresh',
      '1': 'Incremental refresh'
    }
  },
  267: {
    name: 'NoMDEntryTypes',
    description: 'Number of market data entry types'
  },
  268: {
    name: 'NoMDEntries',
    description: 'Number of market data entries'
  },
  269: {
    name: 'MDEntryType',
    description: 'Type of market data entry',
    values: {
      '0': 'Bid',
      '1': 'Offer',
      '2': 'Trade',
      '3': 'Index Value',
      '4': 'Opening Price',
      '5': 'Closing Price',
      '6': 'Settlement Price',
      '7': 'Trading Session High Price',
      '8': 'Trading Session Low Price'
    }
  },
  270: {
    name: 'MDEntryPx',
    description: 'Price of market data entry'
  },
  271: {
    name: 'MDEntrySize',
    description: 'Size of market data entry'
  },
  272: {
    name: 'MDEntryDate',
    description: 'Date of market data entry'
  },
  371: {
    name: 'RefTagID',
    description: 'Reference tag ID for reject message'
  },
  372: {
    name: 'RefMsgType',
    description: 'Reference message type for reject'
  },
  373: {
    name: 'SessionRejectReason',
    description: 'Reason for session-level reject',
    values: {
      '0': 'Invalid tag number',
      '1': 'Required tag missing',
      '2': 'Tag not defined for this message type',
      '3': 'Undefined tag',
      '4': 'Tag specified without a value',
      '5': 'Value is incorrect for this tag',
      '6': 'Incorrect data format for value',
      '7': 'Decryption problem',
      '8': 'Signature problem',
      '9': 'CompID problem',
      '10': 'SendingTime accuracy problem',
      '11': 'Invalid MsgType'
    }
  },
  380: {
    name: 'BusinessRejectReason',
    description: 'Reason for business-level reject',
    values: {
      '0': 'Other',
      '1': 'Unknown ID',
      '2': 'Unknown Security',
      '3': 'Unsupported Message Type',
      '4': 'Application not available',
      '5': 'Conditionally Required Field Missing',
      '6': 'Not authorized'
    }
  },
  7: {
    name: 'BeginSeqNo',
    description: 'Beginning sequence number for resend request'
  },
  16: {
    name: 'EndSeqNo',
    description: 'Ending sequence number for resend request'
  },
  33: {
    name: 'LinesOfText',
    description: 'Number of lines of text in message'
  },
  36: {
    name: 'NewSeqNo',
    description: 'New sequence number'
  },
  42: {
    name: 'Headline',
    description: 'Headline of news message'
  },
  66: {
    name: 'ListID',
    description: 'Unique identifier for list of orders'
  },
  67: {
    name: 'ListSeqNo',
    description: 'Sequence number within list'
  },
  68: {
    name: 'TotNoOrders',
    description: 'Total number of orders in list'
  },
  73: {
    name: 'NoOrders',
    description: 'Number of orders in this message'
  },
  75: {
    name: 'TradeDate',
    description: 'Date of trade'
  },
  123: {
    name: 'GapFillFlag',
    description: 'Indicates if message is being sent to fill a sequence gap',
    values: {
      'Y': 'Gap Fill Message',
      'N': 'Sequence Reset'
    }
  },
  148: {
    name: 'Urgency',
    description: 'News urgency',
    values: {
      '0': 'Normal',
      '1': 'Flash',
      '2': 'Background'
    }
  },
  164: {
    name: 'EmailThreadID',
    description: 'Email thread identifier'
  },
  279: {
    name: 'MDUpdateAction',
    description: 'Type of market data update',
    values: {
      '0': 'New',
      '1': 'Change',
      '2': 'Delete'
    }
  },
  281: {
    name: 'MDReqRejReason',
    description: 'Reason for market data request reject',
    values: {
      '0': 'Unknown symbol',
      '1': 'Duplicate MDReqID',
      '2': 'Insufficient bandwidth',
      '3': 'Insufficient permissions',
      '4': 'Unsupported subscriptionRequestType'
    }
  },
  571: {
    name: 'TradeReportID',
    description: 'Unique identifier for trade report'
  },
  828: {
    name: 'TrdType',
    description: 'Type of trade',
    values: {
      '0': 'Regular Trade',
      '1': 'Block Trade',
      '2': 'EFP',
      '3': 'Transfer',
      '4': 'Late Trade'
    }
  },
  856: {
    name: 'TradeReportType',
    description: 'Type of trade report',
    values: {
      '0': 'Submit',
      '1': 'Alleged',
      '2': 'Accept',
      '3': 'Decline',
      '4': 'Addendum'
    }
  },
  909: {
    name: 'CollInquiryID',
    description: 'Unique identifier for collateral inquiry message'
  },
  910: {
    name: 'CollValue',
    description: 'Value of collateral'
  },
  911: {
    name: 'CollType',
    description: 'Type of collateral',
    values: {
      '0': 'Cash',
      '1': 'Securities',
      '2': 'Letters of Credit',
      '3': 'Other'
    }
  },
  912: {
    name: 'CollStatus',
    description: 'Status of collateral',
    values: {
      '0': 'Unassigned',
      '1': 'Partially Assigned',
      '2': 'Assignment Proposed',
      '3': 'Assigned',
      '4': 'Challenged'
    }
  },
  913: {
    name: 'CollRespID',
    description: 'Unique identifier for collateral response'
  },
  107: {
    name: 'SecurityDesc',
    description: 'Security description'
  },
  320: {
    name: 'SecurityReqID',
    description: 'Unique identifier for security request'
  },
  321: {
    name: 'SecurityRequestType',
    description: 'Type of security request',
    values: {
      '0': 'Request Security Identity and Specifications',
      '1': 'Request Security Trading Status',
      '2': 'Request Security Trading History',
      '3': 'Request Security Reference Data'
    }
  },
  322: {
    name: 'SecurityResponseType',
    description: 'Type of security response',
    values: {
      '0': 'Accept Security Proposal As Is',
      '1': 'Accept Security Proposal With Revisions',
      '2': 'Reject Security Proposal',
      '3': 'Can not Match Selection Criteria'
    }
  },
  324: {
    name: 'SecurityStatusReqID',
    description: 'Unique identifier for security status request'
  },
  326: {
    name: 'SecurityTradingStatus',
    description: 'Trading status of the security',
    values: {
      '1': 'Trading Halt',
      '2': 'Trading Resumed',
      '3': 'No Market',
      '4': 'Pre Open',
      '5': 'Opening Rotation',
      '6': 'Fast Market'
    }
  },
  327: {
    name: 'HaltReason',
    description: 'Reason for trading halt',
    values: {
      '1': 'News Dissemination',
      '2': 'Order Imbalance',
      '3': 'Order Influx',
      '4': 'Additional Information'
    }
  },
  460: {
    name: 'Product',
    description: 'Product type',
    values: {
      'USD': 'US Dollar',
      'EUR': 'Euro'
    }
  },
  461: {
    name: 'CFICode',
    description: 'ISO standard instrument classification code',
    values: {
      'CS': 'Common Stock',
      'OC': 'Call Option',
      'OP': 'Put Option'
    }
  },
  710: {
    name: 'PosReqID',
    description: 'Unique identifier for position request'
  },
  712: {
    name: 'PosTransType',
    description: 'Position transaction type',
    values: {
      '0': 'Exercise',
      '1': 'Do Not Exercise',
      '2': 'Position Adjustment',
      '3': 'Position Change Submission'
    }
  },
  713: {
    name: 'PosMaintAction',
    description: 'Position maintenance action',
    values: {
      '1': 'New',
      '2': 'Replace',
      '3': 'Cancel'
    }
  },
  715: {
    name: 'ClearingBusinessDate',
    description: 'Date of clearing business'
  },
  721: {
    name: 'PosMaintRptID',
    description: 'Position maintenance report ID'
  },
  722: {
    name: 'PosReqResult',
    description: 'Result of position request',
    values: {
      '0': 'Valid Request',
      '1': 'Invalid or Unsupported Request',
      '2': 'No Positions Found That Match Criteria',
      '3': 'Not Authorized to Request Positions'
    }
  },
  723: {
    name: 'PosReqStatus',
    description: 'Status of position request',
    values: {
      '0': 'Completed',
      '1': 'Completed With Warnings',
      '2': 'Rejected'
    }
  },
  53: {
    name: 'Quantity',
    description: 'Order quantity'
  },
  70: {
    name: 'AllocID',
    description: 'Unique identifier for allocation'
  },
  71: {
    name: 'AllocTransType',
    description: 'Allocation transaction type',
    values: {
      '0': 'New',
      '1': 'Replace',
      '2': 'Cancel',
      '3': 'Preliminary',
      '4': 'Calculated',
      '5': 'Calculated without Preliminary'
    }
  },
  87: {
    name: 'AllocStatus',
    description: 'Status of allocation',
    values: {
      '0': 'Accepted',
      '1': 'Block Level Reject',
      '2': 'Account Level Reject',
      '3': 'Received',
      '4': 'Processing',
      '5': 'Rejected by Intermediary'
    }
  },
  88: {
    name: 'AllocRejCode',
    description: 'Reason for allocation rejection',
    values: {
      '0': 'Unknown Account',
      '1': 'Incorrect Quantity',
      '2': 'Incorrect Average Price',
      '3': 'Unknown Executing Broker Mnemonic',
      '4': 'Commission Difference',
      '5': 'Unknown OrderID',
      '6': 'Unknown ListID',
      '7': 'Other'
    }
  },
  568: {
    name: 'TradeRequestID',
    description: 'Unique identifier for trade request'
  },
  569: {
    name: 'TradeRequestType',
    description: 'Type of trade request',
    values: {
      '0': 'All Trades',
      '1': 'Matched Trades',
      '2': 'Unmatched Trades',
      '3': 'Unreported Trades',
      '4': 'Advisories'
    }
  }
};

// Helper function to create template with dynamic FIX version
const createVersionedTemplate = (fields: Record<number, string>) => {
  return (version: string) => {
    // Create ordered fields string with version
    const allFields = {
      8: version,  // BeginString will be dynamic based on selected version
      ...fields
    };
    
    // Sort fields by tag number and format as FIX string
    return Object.entries(allFields)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([tag, value]) => `${tag}=${value}`)
      .join('\u0001') + '\u0001';
  };
};

export const MESSAGE_TEMPLATES = {
  logon: createVersionedTemplate({
    9: '108',
    35: 'A',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    98: '0',
    108: '30',
    10: '000'
  }),
  newOrder: createVersionedTemplate({
    9: '178',
    35: 'D',
    49: 'SENDER',
    56: 'TARGET',
    34: '2',
    52: '20240301-12:01:00',
    11: '123456',
    21: '1',
    55: 'AAPL',
    54: '1',
    60: '20240301-12:01:00',
    40: '2',
    44: '150.50',
    38: '100',
    10: '000'
  }),
  executionReport: createVersionedTemplate({
    9: '234',
    10: '000',
    11: '123456',
    17: '789',
    20: '0',
    31: '150.50',
    32: '100',
    34: '3',
    35: '8',
    37: '123456',
    38: '100',
    39: '2',
    44: '150.50',
    49: 'SENDER',
    52: '20240301-12:01:01',
    54: '1',
    55: 'AAPL',
    56: 'TARGET'
  }),
  logout: createVersionedTemplate({
    9: '108',
    35: '5',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    58: 'User requested logout',
    10: '000'
  }),
  heartbeat: createVersionedTemplate({
    9: '89',
    35: '0',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    10: '000'
  }),
  testRequest: createVersionedTemplate({
    9: '112',
    35: '1',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    112: 'TEST123',
    10: '000'
  }),
  orderCancelRequest: createVersionedTemplate({
    9: '156',
    35: 'F',
    49: 'SENDER',
    56: 'TARGET',
    34: '2',
    52: '20240301-12:01:00',
    37: '123456',
    11: '789ABC',
    41: 'ORIG123',
    55: 'AAPL',
    54: '1',
    60: '20240301-12:01:00',
    38: '100',
    10: '000'
  }),
  orderCancelReplace: createVersionedTemplate({
    9: '189',
    35: 'G',
    49: 'SENDER',
    56: 'TARGET',
    34: '2',
    52: '20240301-12:01:00',
    37: '123456',
    11: '789ABC',
    41: 'ORIG123',
    55: 'AAPL',
    54: '1',
    60: '20240301-12:01:00',
    38: '150',
    40: '2',
    44: '155.50',
    10: '000'
  }),
  marketDataRequest: createVersionedTemplate({
    9: '178',
    35: 'V',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    262: 'REQID123',
    263: '1',
    264: '1',
    265: '1',
    267: '2',
    269: '0',
    146: '1',
    55: 'AAPL',
    10: '000'
  }),
  marketDataSnapshot: createVersionedTemplate({
    9: '245',
    35: 'W',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    262: 'REQID123',
    55: 'AAPL',
    268: '2',
    269: '0',
    270: '1',
    271: '150.50',
    272: '100',
    270: '2',
    271: '150.55',
    272: '200',
    10: '000'
  }),
  reject: createVersionedTemplate({
    9: '156',
    35: '3',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    45: '5',
    371: '1',
    372: '55',
    373: '1',
    58: 'Invalid tag number',
    10: '000'
  }),
  businessReject: createVersionedTemplate({
    9: '167',
    35: 'j',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    45: '6',
    372: 'D',
    380: '5',
    58: 'Unknown symbol',
    10: '000'
  }),
  resendRequest: createVersionedTemplate({
    9: '123',
    35: '2',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    7: '1',
    16: '100',
    10: '000'
  }),
  sequenceReset: createVersionedTemplate({
    9: '123',
    35: '4',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    36: '100',
    123: 'Y',
    10: '000'
  }),
  newOrderList: createVersionedTemplate({
    9: '245',
    35: 'E',
    49: 'SENDER',
    56: 'TARGET',
    34: '2',
    52: '20240301-12:01:00',
    66: 'LIST1',
    68: '2',
    73: '1',
    11: '123456',
    67: '1',
    55: 'AAPL',
    54: '1',
    38: '100',
    40: '2',
    44: '150.50',
    10: '000'
  }),
  orderStatusRequest: createVersionedTemplate({
    9: '145',
    35: 'H',
    49: 'SENDER',
    56: 'TARGET',
    34: '2',
    52: '20240301-12:01:00',
    11: '123456',
    37: 'ORDER123',
    55: 'AAPL',
    54: '1',
    10: '000'
  }),
  tradeCaptureReport: createVersionedTemplate({
    9: '234',
    35: 'AE',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:01:00',
    571: 'TRADE123',
    856: '0',
    828: '0',
    55: 'AAPL',
    32: '100',
    31: '150.50',
    75: '20240301',
    60: '20240301-12:01:00',
    10: '000'
  }),
  marketDataIncrementalRefresh: createVersionedTemplate({
    9: '198',
    35: 'X',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    262: 'REQID123',
    268: '1',
    279: '1',
    269: '1',
    270: '150.55',
    271: '100',
    55: 'AAPL',
    10: '000'
  }),
  marketDataRequestReject: createVersionedTemplate({
    9: '167',
    35: 'Y',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    262: 'REQID123',
    281: '1',
    58: 'Invalid symbol',
    10: '000'
  }),
  email: createVersionedTemplate({
    9: '189',
    35: 'C',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    164: 'SUBJECT1',
    33: '2',
    58: 'Line 1 of email message',
    58: 'Line 2 of email message',
    10: '000'
  }),
  news: createVersionedTemplate({
    9: '198',
    35: 'B',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    42: 'HEADLINE1',
    33: '1',
    58: 'News article content',
    148: '1',
    10: '000'
  }),
  tradeCaptureReportRequest: createVersionedTemplate({
    9: '156',
    35: 'AD',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    568: 'REQ123',  // TradeRequestID
    569: '0',       // TradeRequestType (All Trades)
    55: 'AAPL',
    10: '000'
  }),
  securityDefinitionRequest: createVersionedTemplate({
    9: '167',
    35: 'c',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    320: 'REQ123',  // SecurityReqID
    321: '0',       // SecurityRequestType
    55: 'AAPL',
    10: '000'
  }),
  securityDefinition: createVersionedTemplate({
    9: '234',
    35: 'd',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    320: 'REQ123',  // SecurityReqID
    322: '0',       // SecurityResponseType
    55: 'AAPL',
    107: 'Apple Inc',  // SecurityDesc
    460: 'USD',        // Product
    461: 'CS',         // CFICode (Common Stock)
    10: '000'
  }),
  securityStatusRequest: createVersionedTemplate({
    9: '156',
    35: 'e',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    324: 'REQ123',  // SecurityStatusReqID
    55: 'AAPL',
    10: '000'
  }),
  securityStatus: createVersionedTemplate({
    9: '189',
    35: 'f',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    324: 'REQ123',  // SecurityStatusReqID
    55: 'AAPL',
    326: '1',       // SecurityTradingStatus (Trading Halt)
    327: '1',       // HaltReason
    10: '000'
  }),
  collateralInquiry: createVersionedTemplate({
    9: '167',
    35: 'BB',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    909: 'REQ123',  // CollInquiryID
    10: '000'
  }),
  collateralReport: createVersionedTemplate({
    9: '198',
    35: 'BA',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    909: 'REQ123',  // CollInquiryID
    910: '1000000', // CollValue
    10: '000'
  }),
  allocationInstruction: createVersionedTemplate({
    9: '234',
    35: 'J',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    70: 'ALLOC123', // AllocID
    71: '1',        // AllocTransType
    73: '2',        // NoOrders
    11: '123456',   // ClOrdID
    55: 'AAPL',
    53: '100',      // Quantity
    10: '000'
  }),
  allocationInstructionAck: createVersionedTemplate({
    9: '178',
    35: 'P',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    70: 'ALLOC123', // AllocID
    75: '0',        // TradeDate
    87: '0',        // AllocStatus
    88: '0',        // AllocRejCode
    10: '000'
  }),
  positionMaintenanceRequest: createVersionedTemplate({
    9: '189',
    35: 'AL',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    710: 'POS123',  // PosReqID
    712: '0',       // PosTransType
    713: '1',       // PosMaintAction
    715: '0',       // ClearingBusinessDate
    10: '000'
  }),
  positionReport: createVersionedTemplate({
    9: '234',
    35: 'AP',
    49: 'SENDER',
    56: 'TARGET',
    34: '1',
    52: '20240301-12:00:00',
    710: 'POS123',  // PosReqID
    721: '1',       // PosMaintRptID
    722: '0',       // PosReqResult
    723: '1',       // PosReqStatus
    10: '000'
  })
};