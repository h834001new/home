var app=angular.module("myapp",[])
app.controller('ctrl', function ($scope) {
    $scope.firstName = [1, 2, 3, 4, 5, 6];
    $scope.cat = ['Latest', 'Fresher', 'Experience', 'Government']
    
    $scope.cats = 'Latest';
    $scope.Latest = [{
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    },
    {
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    },
    {
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    },
    {
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    },
    {
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    },
    {
        'name': 'ibm',
        'title': 'software engineer',
        'exp': '0-5',
        'degree': 'btech',
        'location': 'mumbai',
        'about': 'it company'
    }
    ]
    $scope.Fresher = [{
        'name': 'TCS',
        'title': 'system analyst',
        'exp': '0',
        'degree': 'btech',
        'location': 'india',
        'about': 'it company'
    }, {
        'name': 'TCS',
        'title': 'system analyst',
        'exp': '0',
        'degree': 'btech',
        'location': 'india',
        'about': 'it company'
    },
    {
        'name': 'TCS',
        'title': 'system analyst',
        'exp': '0',
        'degree': 'btech',
        'location': 'india',
        'about': 'it company'
    },
    {
        'name': 'TCS',
        'title': 'system analyst',
        'exp': '0',
        'degree': 'btech',
        'location': 'india',
        'about': 'it company'
    },
    ]
    $scope.category = { 'Latest': $scope.Latest, 'Fresher': $scope.Fresher };

  
    $scope.myFunc = function () {
        $scope.category = { 'Latest': $scope.Latest, 'Fresher': $scope.Fresher };
        console.log($scope.cats);
        
    };
    
    
    
});
