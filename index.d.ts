import * as React from "react";

type DENSITY = {
  DNESITY0: number;
  DNESITY1: number;
  DNESITY2: number;
  DNESITY3: number;
  DNESITY4: number;
  DNESITY5: number;
  DNESITY6: number;
  DNESITY7: number;
  DNESITY8: number;
  DNESITY9: number;
  DNESITY10: number;
  DNESITY11: number;
  DNESITY12: number;
  DNESITY13: number;
  DNESITY14: number;
  DNESITY15: number;
} 

type ALIGN = {
  LEFT: number;
  CENTER: number;
  RIGHT: number;
}

type ROTATION = {
  OFF: number;
  ON: number;
}

type BARCODETYPE = {
  UPC_A: number;
  UPC_E: number;
  JAN13: number;
  JAN8: number;
  CODE39: number;
  ITF: number;
  CODABAR: number;
  CODE93: number;
  CODE128: number;
}

type ERROR_CORRECTION = {
  L: number;
  M: number;
  Q: number;
  H: number;
}

type READABLE = {
  DISABLE: number;
  EANBLE: number;
}

type TEAR = {
  ON: string;
  OFF: string;
}

type PRINT_SPEED = {
  SPEED1DIV5: number;
  SPEED2: number;
  SPEED3: number;
  SPEED4: number;
}

type BITMAP_MODE = {
  OVERWRITE: number;
  OR: number;
  XOR: number;
}

type FONTMUL = {
  MUL_1: number;
  MUL_2: number;
  MUL_3: number;
  MUL_4: number;
  MUL_5: number;
  MUL_6: number;
  MUL_7: number;
  MUL_8: number;
  MUL_9: number;
  MUL_10: number;
}

type ROTATION = {
  ROTATION_0: ROTATION_0;
  ROTATION_90: ROTATION_90;
  ROTATION_180: ROTATION_180;
  ROTATION_270: ROTATION_270;
}

type EEC = {
  LEVEL_L: LEVEL_L;
  LEVEL_M: LEVEL_M;
  LEVEL_Q: LEVEL_Q;
  LEVEL_H: LEVEL_H;
}

type FONTTYPE = {
  FONT_1: string;
  FONT_2: string;
  FONT_3: string;
  FONT_4: string;
  FONT_5: string;
  FONT_6: string;
  FONT_7: string;
  FONT_8: string;
  SIMPLIFIED_CHINESE: string;
  TRADITIONAL_CHINESE: string;
  KOREAN: string;
}

type BARCODETYPE = {
  CODE128: CODE128;
  CODE128M: CODE128M;
  EAN128: EAN128;
  ITF25: ITF25;
  ITF25C: ITF25C;
  CODE39: CODE39;
  CODE39C: CODE39C;
  CODE39S: CODE39S;
  CODE93: CODE93;
  EAN13: EAN13;
  EAN13_2: EAN13_2;
  EAN13_5: EAN13_5;
  EAN8: EAN8;
  EAN8_2: EAN8_2;
  EAN8_5: EAN8_5;
  CODABAR: CODABAR;
  POST: POST;
  UPCA: UPCA;
  UPCA_2: UPCA_2;
  UPCA_5: UPCA_5;
  UPCE: UPCE;
  UPCE_2: UPCE_2;
  UPCE_5: UPCE_5;
  CPOST: CPOST;
  MSI: MSI;
  MSIC: MSIC;
  PLESSEY: PLESSEY;
  ITF14: ITF14;
  EAN14: EAN14;
}

type DIRECTION = {
  FORWARD: number;
  BACKWARD: number;
}

export interface BluetoothManager {
  DENSITY: DENSITY;
  ALIGN: ALIGN;
  ROTATION: ROTATION;
  BARCODETYPE: BARCODETYPE;
  ERROR_CORRECTION: ERROR_CORRECTION;
  READABLE: READABLE;
  TEAR: TEAR;
  PRINT_SPEED: PRINT_SPEED;
  BITMAP_MODE: BITMAP_MODE;
  FONTMUL: FONTMUL;
  ROTATION: ROTATION;
  EEC: EEC;
  FONTTYPE: FONTTYPE;
  BARCODETYPE: BARCODETYPE;
  DIRECTION: DIRECTION;

  EVENT_DEVICE_ALREADY_PAIRED: string;
  EVENT_DEVICE_DISCOVER_DONE: string;
  EVENT_DEVICE_FOUND: string;
  EVENT_CONNECTION_LOST: string;
  EVENT_UNABLE_CONNECT: string;
  EVENT_CONNECTED: string;
  EVENT_BLUETOOTH_NOT_SUPPORT: string;

  isBluetoothEnabled(): Promise<boolean>;
  enableBluetooth(): Promise<any>;
  scanDevices(): Promise<any>;
  connect(address: string): Promise<void>;
  disconnect(address: string): Promise<void>;
}

export interface BluetoothEscposPrinter {
  setBlob(n: number): Promise<void>;
  printerAlign(align: ALIGN): Promise<void>;
  printColumn(col: any, align: any, text: any, options: any): Promise<void>;
  printQRCode(qr: string, size: number, n: number): Promise<void>;
  printText(text: string, options: any): Promise<void>;
}