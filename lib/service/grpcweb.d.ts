import { ExportMap } from "../ExportMap";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { CodeGeneratorResponse } from "google-protobuf/google/protobuf/compiler/plugin_pb";
export declare function generateGrpcWebService(filename: string, descriptor: FileDescriptorProto, exportMap: ExportMap): CodeGeneratorResponse.File[];
export declare function generateGrpcWebPromiseServices(filename: string, descriptor: FileDescriptorProto, exportMap: ExportMap): CodeGeneratorResponse.File[];
