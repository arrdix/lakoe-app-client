const role = {
    ADMIN: 'ADMIN',
    SELLER: 'SELLER',
    BUYER: 'BUYER',
}

class RoleChecker {
    isAdmin(userRole: string) {
        return role.ADMIN === userRole
    }

    isSeller(userRole: string) {
        return role.SELLER === userRole
    }

    isBuyer(userRole: string) {
        return role.BUYER === userRole
    }
}

export default new RoleChecker()
