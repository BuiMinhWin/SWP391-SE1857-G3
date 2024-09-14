
CREATE TABLE Customer (
    CustomerID NVARCHAR(50) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(50),
    Address NVARCHAR(255)
);

CREATE TABLE Pricing (
    PricingID NVARCHAR(50) PRIMARY KEY,
    WeightRange NVARCHAR(50),   
    QuantityRange NVARCHAR(50), 
    BasePrice DECIMAL(18, 2),   
    ExtraServicesFee DECIMAL(18, 2), 
    Discount DECIMAL(18, 2)    
);


CREATE TABLE Staff (
    StaffID NVARCHAR(50) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Role NVARCHAR(50),   
    PhoneNumber NVARCHAR(50),
    Email NVARCHAR(255)
);


CREATE TABLE [Order] (
    OrderID NVARCHAR(50) PRIMARY KEY,
    CustomerID NVARCHAR(50),
    OrderDate DATE NOT NULL,
    StartLocation NVARCHAR(255),
    Destination NVARCHAR(255),
    Status NVARCHAR(50),
    ExtraServices NVARCHAR(MAX),
    PricingID NVARCHAR(50),
    CONSTRAINT FK_Order_Customer FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    CONSTRAINT FK_Order_Pricing FOREIGN KEY (PricingID) REFERENCES Pricing(PricingID)
);


CREATE TABLE Koi (
    KoiID NVARCHAR(50) PRIMARY KEY,
    OrderID NVARCHAR(50),
    Type NVARCHAR(255),       
    Quantity INT,             
    Weight DECIMAL(10, 2),    
    CONSTRAINT FK_Koi_Order FOREIGN KEY (OrderID) REFERENCES [Order](OrderID)
);

CREATE TABLE Delivery (
    DeliveryID NVARCHAR(50) PRIMARY KEY,
    OrderID NVARCHAR(50),
    DeliveryStaffID NVARCHAR(50),
    StartDate DATE,
    EndDate DATE,
    HealthCheckStatus NVARCHAR(255),
    PackagingStatus NVARCHAR(255),
    CustomsClearanceStatus NVARCHAR(255),
    DeliveryStatus NVARCHAR(50),
    CONSTRAINT FK_Delivery_Order FOREIGN KEY (OrderID) REFERENCES [Order](OrderID),
    CONSTRAINT FK_Delivery_Staff FOREIGN KEY (DeliveryStaffID) REFERENCES Staff(StaffID)
);

CREATE TABLE Feedback (
    FeedbackID NVARCHAR(50) PRIMARY KEY,
    CustomerID NVARCHAR(50),
    OrderID NVARCHAR(50),
    Rating INT,
    Comment NVARCHAR(MAX),
    CONSTRAINT FK_Feedback_Customer FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    CONSTRAINT FK_Feedback_Order FOREIGN KEY (OrderID) REFERENCES [Order](OrderID)
);

CREATE TABLE BlogNews (
    BlogID NVARCHAR(50) PRIMARY KEY,
    Title NVARCHAR(255),
    Content NVARCHAR(MAX),
    StaffID NVARCHAR(50) NULL,      
    CustomerID NVARCHAR(50) NULL,   
    CONSTRAINT FK_BlogNews_Staff FOREIGN KEY (StaffID) REFERENCES Staff(StaffID),
    CONSTRAINT FK_BlogNews_Customer FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);


