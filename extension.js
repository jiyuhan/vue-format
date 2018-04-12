/**
 * @file vue-format 入口文件
 */
const vscode = require('vscode');
const formatInit = require('./src');

function activate(context) {
    // 注册命令，该命令和package.json中命令一致
    let disposable = vscode.commands.registerCommand('extension.vueFormat', function () {
        formatInit.init();
        // vscode.window.showInformationMessage('vue format now');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
    vscode.window.showInformationMessage('deactivated');
}

exports.deactivate = deactivate;
