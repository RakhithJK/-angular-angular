## API Report File for "@angular/router_upgrade"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentRef } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

// @public
export const RouterUpgradeInitializer: {
    provide: InjectionToken<readonly ((compRef: ComponentRef<any>) => void)[]>;
    multi: boolean;
    useFactory: (ngUpgrade: UpgradeModule) => () => void;
    deps: (typeof UpgradeModule)[];
};

// @public
export function setUpLocationSync(ngUpgrade: UpgradeModule, urlType?: 'path' | 'hash'): void;

// (No @packageDocumentation comment for this package)

```
