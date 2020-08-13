# storage-map

### 启动

如果习惯使用 `npm`, 请替换成 `npm run *`。

#### Dependencies

```shell
# install dependencies
yarn install
```

#### Serve

```shell
# Compile project and watch file
yarn serve
```

#### Build

```shell
# build for production
yarn build
```

#### test unit

```shell
# 查看测试用例通过情况
yarn run test
# 查看测试覆盖率
yarn run test --covarage
```

#### git commit

```shell
# submit git log with conventional style
yarn commit
```

### Commit 提交规范

commit 提交规范遵循 [Angular 规范](https://github.com/angular/angular.js/blob/f3377da6a748007c11fde090890ee58fae4cefa5/CONTRIBUTING.md#-git-commit-guidelines)，大致规范如下：

```
<type>(<scope>): <subject>
// 空一行
<body>
//type（必需）、scope（可选）和subject（必需）
//<body>(可选)
```

- type 用于说明 commit 的类别，只允许使用下面 8 个标识。
- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- perf: 性能提升
- test：增加测试
- chore：构建过程或辅助工具的变动
