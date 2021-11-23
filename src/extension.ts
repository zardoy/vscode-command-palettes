import vscode from 'vscode'
import { registerActiveDevelopmentCommand } from 'vscode-framework'

export const activate = () => {
    registerActiveDevelopmentCommand(() => {
        console.log(vscode.workspace.getConfiguration().get('commandPalettes.group.foo'))
    })
}
