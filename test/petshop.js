    var Adoption = artifacts.require("./Adoption.sol");

    contract('Adoption', function(accounts) {
        it("Adoption of pet ID 8 should be recorded", function() {
            var adoptionInstance;
            return Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;
                return adoptionInstance.adopt(8, {
                    from: accounts[0]
                });
            }).then(function() {
                return adoptionInstance.getAdopters.call();
            }).then(function(adopters) {
                assert.equal(adopters[8], accounts[0], "Adoption of pet ID 8 should be recorded");
            });
        });
    });
