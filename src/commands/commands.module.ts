import { Module } from '@nestjs/common';

import { CommandsService } from './commands.service';

import { ConfigModule } from '../config/config.module';
import { DiscordModule } from '../discord/discord.module';
import { ResourcesModule } from '../resources/resources.module';

import { PingHandler } from './ping/ping.handler';
import { InviteHandler } from './invite/invite.handler';
import { HelpHandler } from './help/help.handler';
import { StatusHandler } from './status/status.handler';
import { TroopsHandler } from './game/troops/troops.handler';
import { WorkHandler } from './game/work/work.handler';
import { RecruitHandler } from './game/recruit/recruit.handler';
import { ResourcesHandler } from './game/resources/resources.handler';

@Module({
  imports: [ConfigModule, DiscordModule, ResourcesModule],
  providers: [
    CommandsService,
    PingHandler,
    InviteHandler,
    HelpHandler,
    StatusHandler,
    TroopsHandler,
    WorkHandler,
    RecruitHandler,
    ResourcesHandler,
  ],
  exports: [CommandsService],
})
export class CommandsModule {}
