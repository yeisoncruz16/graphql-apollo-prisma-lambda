import path from 'path'

import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)

void loader.load(path.join(__dirname, '/application.yml'))

export default container
