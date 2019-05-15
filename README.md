# cheat boilerplate

cheat-boilerplate, 基于 carlo-boilerplate 制作.

## how to use

### develop

```bash
make install # 安装依赖
yarn dev:render [--re-dll] # 开启热加载, re-dll: rebuild dll
# yarn build:render [--re-dll] [--dev] # build code. re-dll: rebuild dll, dev: dev config
yarn start # 启动 carlo
```

### build

```bash
yarn build:render [--re-dll] [--dev] # build code. re-dll: rebuild dll, dev: dev config
yarn build
```

## tips

如果修改了 dll 内容的话记得在执行时带上`--re-dll`  
打包 `npx pkg -t macos .`

### 获取手机应用的 bundle id 列表
```bash
# brew install ideviceinstaller
ideviceinstaller -l
# com.netease.onmyoji - 阴阳师 1.0.4067.412106
```

## TODO

- [ ] 添加框架性内容 [WIP]

## License

Anti-996-License-1.0
