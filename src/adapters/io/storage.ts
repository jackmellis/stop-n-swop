import jpex from 'jpex';
import type { Storage } from 'ports/io';

jpex.constant<Storage>(window.localStorage);
