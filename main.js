$(document).ready(function() {
    
    var pagesInfo = [
        {id: 1,
        name: 'How I finished Udacity\'s Data Analysis Nano Degree (DAND) in a month & a half',
        image: 'assets/landing-edited.jpg',
        paragraphs: ['...',
                    'A web zine by hadeel']
        },
        {id: 2,
        name: 'Chapter 1: Motivation',
        image: 'assets/screen-edited.jpg',
        paragraphs: ['A technology-enthusiast father.',
                    'Workaholism.',
                    'Excitement to explore a new realm and skills.',
                    'Believing in the power of the human brain.',
                    'Competitiveness.']
        },
        {id: 3,
        name: 'Chapter 2: Methodolgoy (Study Material)',
        image: 'assets/study2-edited.jpg',
        paragraphs: ['A look through the subsequent section in the course for an overall visual.',
                    'A weekly plan that suits my mental velocity.',
                    'A daily plan to modularize my weekly tasks.']
        },
        {id: 4,
        name: 'Chapter 3: Methodolgoy (Project)',
        image: 'assets/project-edited.jpg',
        paragraphs: ['Peruse the instructions & rubric.',
                    'Outline the project into feasible pieces.',
                    'Work toward my project objectives.']
        },
        {id: 5,
        name: 'Chapter 4: Overall Experience',
        image: 'assets/experience-edited.jpg',
        paragraphs: ['Some ups and downs.',
                    'Frustration followed by perseverance.',
                    'A weekly sense of accomplishment.',
                    'Above all, I was on cloud nine.']
        } 
    ];
    
    var i = 0;
    var paragraphs = "";
    
    arrowVisibility();        
        
    $(".next").click(function() {
        
        i++;
                
        arrowVisibility();
        showData();
        
    });
    
    $(".prev").click(function() {
        
        i--;
        
        arrowVisibility();
        showData();
        
    });
    
    function arrowVisibility() {
        if (i >= pagesInfo.length - 1) {
            $(".next").hide();
        }
    
        if (i < pagesInfo.length - 1) {
            $(".next").show();
        }
        
        if (i <= 0) {
            $(".prev").hide();
        }
        
        if (i > 0) {
            $(".prev").show();
        }

    }
    
    function showData() {
        paragraphs = "";
        var title = "<h1>" + pagesInfo[i].name + "</h1>";
        pagesInfo[i].paragraphs.forEach(function(val, key) {
            paragraphs += "<p>" + val + "</p>"
        });
        $(".content").html(title + paragraphs);
        
        // image source
        
        $(".pageImage").html("<img src=\"" + pagesInfo[i].image + "\" alt=\"Slide Image\" width=\"500\">");
    }
    




});
