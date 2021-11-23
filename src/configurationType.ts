export type Configuration = {
    palettes: {
        [paletteId: string]: {
            title?: string
            commands: Array<{
                /** Full ID of the command. e.g. `editor.action.indentLines` or `git.revertSelectedRanges` */
                id: string
                /** Optional custom title of the command */
                title?: string
            }>
        }
    }
}
