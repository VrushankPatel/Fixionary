import { ParsedFixMessage, FixField } from './FixParser';
import { FIX_DICTIONARY } from './FixDictionary';

interface FixVersion {
  version: string;
  requiredTags: Record<string, number[]>;
  validTags: Set<number>;
}

export class FixValidator {
  private static readonly VERSIONS: Record<string, FixVersion> = {
    '4.2': {
      version: '4.2',
      requiredTags: {
        '0': [8, 9, 35, 49, 56],  // Heartbeat
        '1': [8, 9, 35, 49, 56, 112],  // Test Request
        '2': [8, 9, 35, 49, 56, 7],  // Resend Request
        '3': [8, 9, 35, 49, 56, 45, 371, 372, 373],  // Reject
        '4': [8, 9, 35, 49, 56, 36],  // Sequence Reset
        '5': [8, 9, 35, 49, 56],  // Logout
        'A': [8, 9, 35, 49, 56, 98, 108],  // Logon
        'D': [8, 9, 35, 49, 56, 11, 21, 55, 54, 60, 40],  // New Order Single
        '8': [8, 9, 35, 49, 56, 37, 11, 17, 20, 39, 55, 54, 38, 44, 32, 31],  // Execution Report
        'E': [8, 9, 35, 49, 56, 66, 68, 73, 11, 67, 55, 54, 38],  // New Order List
        'F': [8, 9, 35, 49, 56, 41, 11, 55],  // Order Cancel Request
        'G': [8, 9, 35, 49, 56, 41, 11, 55],  // Order Cancel Replace
        'H': [8, 9, 35, 49, 56, 11, 55],  // Order Status Request
        'J': [8, 9, 35, 49, 56, 70, 71, 73],  // Allocation Instruction
        'P': [8, 9, 35, 49, 56, 70, 87],  // Allocation Instruction Ack
        'V': [8, 9, 35, 49, 56, 262, 263, 264, 265, 267],  // Market Data Request
        'W': [8, 9, 35, 49, 56, 262, 268, 269],  // Market Data Snapshot
        'X': [8, 9, 35, 49, 56, 262, 268],  // Market Data Incremental Refresh
        'Y': [8, 9, 35, 49, 56, 262],  // Market Data Request Reject
        'c': [8, 9, 35, 49, 56, 320, 321],  // Security Definition Request
        'd': [8, 9, 35, 49, 56, 320, 322],  // Security Definition
        'e': [8, 9, 35, 49, 56, 324],  // Security Status Request
        'f': [8, 9, 35, 49, 56, 324, 326],  // Security Status
        'BB': [8, 9, 35, 49, 56, 909],  // Collateral Inquiry
        'BA': [8, 9, 35, 49, 56, 909],  // Collateral Report
        'AL': [8, 9, 35, 49, 56, 710, 712, 713],  // Position Maintenance Request
        'AP': [8, 9, 35, 49, 56, 710, 721, 722, 723]  // Position Report
      },
      validTags: new Set(Object.keys(FIX_DICTIONARY).map(Number))
    },
    '4.4': {
      version: '4.4',
      requiredTags: {
        '0': [8, 9, 35, 49, 56],  // Heartbeat
        '1': [8, 9, 35, 49, 56, 112],  // Test Request
        '2': [8, 9, 35, 49, 56, 7],  // Resend Request
        '3': [8, 9, 35, 49, 56, 45, 371, 372, 373],  // Reject
        '4': [8, 9, 35, 49, 56, 36],  // Sequence Reset
        '5': [8, 9, 35, 49, 56],  // Logout
        'A': [8, 9, 35, 49, 56, 98, 108],  // Logon
        'D': [8, 9, 35, 49, 56, 11, 21, 55, 54, 60, 40],  // New Order Single
        '8': [8, 9, 35, 49, 56, 37, 11, 17, 20, 39, 55, 54, 38, 44, 32, 31],
        'E': [8, 9, 35, 49, 56, 66, 68, 73, 11, 67, 55, 54, 38],
        'F': [8, 9, 35, 49, 56, 41, 11, 55],
        'G': [8, 9, 35, 49, 56, 41, 11, 55],
        'H': [8, 9, 35, 49, 56, 11, 55],
        'J': [8, 9, 35, 49, 56, 70, 71, 73],
        'P': [8, 9, 35, 49, 56, 70, 87],
        'V': [8, 9, 35, 49, 56, 262, 263, 264, 265, 267],
        'W': [8, 9, 35, 49, 56, 262, 268, 269],
        'X': [8, 9, 35, 49, 56, 262, 268],
        'Y': [8, 9, 35, 49, 56, 262],
        'c': [8, 9, 35, 49, 56, 320, 321],
        'd': [8, 9, 35, 49, 56, 320, 322],
        'e': [8, 9, 35, 49, 56, 324],
        'f': [8, 9, 35, 49, 56, 324, 326],
        'BB': [8, 9, 35, 49, 56, 909],
        'BA': [8, 9, 35, 49, 56, 909],
        'AL': [8, 9, 35, 49, 56, 710, 712, 713],
        'AP': [8, 9, 35, 49, 56, 710, 721, 722, 723]
      },
      validTags: new Set(Object.keys(FIX_DICTIONARY).map(Number))
    },
    '5.0': {
      version: '5.0',
      requiredTags: {
        '0': [8, 9, 35, 49, 56],  // Heartbeat
        '1': [8, 9, 35, 49, 56, 112],  // Test Request
        '2': [8, 9, 35, 49, 56, 7],  // Resend Request
        '3': [8, 9, 35, 49, 56, 45, 371, 372, 373],  // Reject
        '4': [8, 9, 35, 49, 56, 36],  // Sequence Reset
        '5': [8, 9, 35, 49, 56],  // Logout
        'A': [8, 9, 35, 49, 56, 98, 108],  // Logon
        'D': [8, 9, 35, 49, 56, 11, 21, 55, 54, 60, 40],  // New Order Single
        '8': [8, 9, 35, 49, 56, 37, 11, 17, 20, 39, 55, 54, 38, 44, 32, 31],
        'E': [8, 9, 35, 49, 56, 66, 68, 73, 11, 67, 55, 54, 38],
        'F': [8, 9, 35, 49, 56, 41, 11, 55],
        'G': [8, 9, 35, 49, 56, 41, 11, 55],
        'H': [8, 9, 35, 49, 56, 11, 55],
        'J': [8, 9, 35, 49, 56, 70, 71, 73],
        'P': [8, 9, 35, 49, 56, 70, 87],
        'V': [8, 9, 35, 49, 56, 262, 263, 264, 265, 267],
        'W': [8, 9, 35, 49, 56, 262, 268, 269],
        'X': [8, 9, 35, 49, 56, 262, 268],
        'Y': [8, 9, 35, 49, 56, 262],
        'c': [8, 9, 35, 49, 56, 320, 321],
        'd': [8, 9, 35, 49, 56, 320, 322],
        'e': [8, 9, 35, 49, 56, 324],
        'f': [8, 9, 35, 49, 56, 324, 326],
        'BB': [8, 9, 35, 49, 56, 909],
        'BA': [8, 9, 35, 49, 56, 909],
        'AL': [8, 9, 35, 49, 56, 710, 712, 713],
        'AP': [8, 9, 35, 49, 56, 710, 721, 722, 723]
      },
      validTags: new Set(Object.keys(FIX_DICTIONARY).map(Number))
    }
  };

  static validate(message: ParsedFixMessage, version: string): string[] {
    const errors: string[] = [];
    const versionString = `FIX.${version}`;

    // Check BeginString matches version
    const beginString = message.fields.find(f => f.tag === 8);
    if (beginString && beginString.value !== versionString) {
      errors.push(`BeginString (8) must be ${versionString}`);
    }

    const fixVersion = FixValidator.VERSIONS[version];
    if (!fixVersion) {
      errors.push(`Unsupported FIX version: ${version}`);
      return errors;
    }

    // Get message type
    const msgTypeField = message.fields.find(f => f.tag === 35);
    if (!msgTypeField) {
      errors.push('Missing required tag: 35 (MsgType)');
      return errors;
    }

    // Get required tags for this message type
    const requiredTags = fixVersion.requiredTags[msgTypeField.value] || [];
    if (!requiredTags.length) {
      errors.push(`Unknown message type: ${msgTypeField.value}`);
      return errors;
    }

    // Check required tags
    const messageTags = new Set(message.fields.map(f => f.tag));
    requiredTags.forEach(tag => {
      if (!messageTags.has(tag)) {
        const fieldName = FIX_DICTIONARY[tag]?.name || tag.toString();
        errors.push(`Missing required tag: ${tag} (${fieldName})`);
      }
    });

    // Validate tags
    message.fields.forEach(field => {
      if (!fixVersion.validTags.has(field.tag)) {
        errors.push(`Invalid tag for FIX ${version}: ${field.tag}`);
      }
    });

    return errors;
  }
}