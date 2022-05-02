// @ts-ignore
import {persistStore} from './persistStore'


export const defaultData = []

export const store = persistStore('data', defaultData)