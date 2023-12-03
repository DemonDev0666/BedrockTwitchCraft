import { HttpHeader, HttpRequest, HttpRequestMethod } from "@minecraft/server-net"; 
import { EntityQueryOptions, World, Block, } from "@minecraft/server";

import { ServerVariables, ServerSecrets, } from "@minecraft/server-admin";

var connected = false;
var serverName = ServerVariables.get("serverName");
var owner = ServerVariables.get("owner");