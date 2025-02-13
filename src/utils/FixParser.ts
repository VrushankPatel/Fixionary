export interface FixField {
  tag: number;
  value: string;
  name?: string;
  error?: string;
}

export interface ParsedFixMessage {
  fields: FixField[];
  errors: string[];
  raw: string;
}

export class FixParser {
  private static readonly SOH = '\u0001';
  private static readonly EQUALS = '=';

  static parse(rawMessage: string, delimiter: string = FixParser.SOH): ParsedFixMessage {
    const result: ParsedFixMessage = {
      fields: [],
      errors: [],
      raw: rawMessage
    };

    if (!rawMessage.trim()) {
      result.errors.push('Empty message');
      return result;
    }

    // Normalize the message by replacing visible delimiters with SOH
    let normalizedMessage = rawMessage;
    if (delimiter === '|') {
      normalizedMessage = rawMessage.replace(/\|/g, FixParser.SOH);
    } else if (delimiter === ' ') {
      normalizedMessage = rawMessage.replace(/\s+/g, FixParser.SOH);
    }

    // Split by SOH and filter out empty strings
    const pairs = normalizedMessage.split(FixParser.SOH).filter(pair => pair.trim());

    pairs.forEach(pair => {
      const [tag, value] = pair.split(FixParser.EQUALS);
      
      if (!tag || value === undefined) {
        result.errors.push(`Malformed field pair: ${pair}`);
        return;
      }

      const tagNum = parseInt(tag.trim(), 10);
      if (isNaN(tagNum)) {
        result.errors.push(`Invalid tag number: ${tag}`);
        return;
      }

      result.fields.push({
        tag: tagNum,
        value: value.trim()
      });
    });

    return result;
  }

  static format(message: ParsedFixMessage, delimiter: string = FixParser.SOH): string {
    return message.fields
      .map(field => `${field.tag}=${field.value}`)
      .join(delimiter);
  }
}