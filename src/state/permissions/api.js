import { delay } '../../utils';

const PERMISSIONS = [
  'CREATE',
  'UPDATE',
  'READ',
  'DELETE'
];

export async function getPermissions() {
  await delay(1000);
  return PERMISSIONS;
}
