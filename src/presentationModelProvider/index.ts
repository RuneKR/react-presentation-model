import { IPresentationModel } from '../IPresentationModel'

export type presentationModelProvider<T extends object> = () => IPresentationModel<T>
